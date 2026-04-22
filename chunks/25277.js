r.d(t, { A: () => n });
var s = r(64700),
    l = r(650583);
class n extends s.Component {
    state = { focusedColumn: null, focusedRow: null };
    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyDown, !0);
    }
    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyDown, !0);
    }
    handleKeyDown = (e) => {
        let { onSelect: t } = this.props;
        switch (e.key) {
            case l.dh.ARROW_DOWN:
            case l.dh.ARROW_UP:
            case l.dh.ARROW_LEFT:
            case l.dh.ARROW_RIGHT:
                this.focusNext(
                    (function (e) {
                        switch (e) {
                            case l.dh.ARROW_DOWN:
                                return "ARROW_DOWN";
                            case l.dh.ARROW_UP:
                                return "ARROW_UP";
                            case l.dh.ARROW_LEFT:
                                return "ARROW_LEFT";
                            case l.dh.ARROW_RIGHT:
                                return "ARROW_RIGHT";
                            default:
                                return null;
                        }
                    })(e.key),
                );
                break;
            case l.dh.ENTER:
                let r = this.calculateFocusedItem();
                null != r && null != t && (e.preventDefault(), e.stopPropagation(), t(r));
        }
    };
    focusNext(e) {
        let { getItemGrid: t, onFocus: r } = this.props,
            { focusedColumn: s, focusedRow: l } = this.state;
        if (null == e) return;
        let n = t();
        if (null == n) return;
        let i = this.getNext(n, s, l, e);
        this.setState({ focusedColumn: i.column, focusedRow: i.row }, () => {
            let e = this.calculateFocusedItem();
            null != e && null != r && r(e);
        });
    }
    wrapPosition = (e, t, r, s) => {
        let l = e.length,
            n = Math.max(r * l + t + s, 0) % l,
            i = this.calculateClosest(e[t][r], e[n]) ?? r,
            o = 0;
        return s < 0 && n > t && (o = -1), s > 0 && n < t && (o = 1), { column: n, row: i + o };
    };
    getNext(e, t, r, s) {
        let l, n, i, o;
        if (null == t || null == r) (n = 0), (i = 0), (l = { column: 0, row: 0 });
        else
            switch (((n = t), (i = r), s)) {
                case "ARROW_UP":
                    l = { column: n, row: Math.max(i - 1, 0) };
                    break;
                case "ARROW_DOWN":
                    l = { column: n, row: Math.min(i + 1, e[n].length - 1) };
                    break;
                case "ARROW_LEFT":
                    l = this.wrapPosition(e, n, i, -1);
                    break;
                case "ARROW_RIGHT":
                    l = this.wrapPosition(e, n, i, 1);
            }
        return (
            null != l && (o = e[l.column][l.row]),
            (null == o || null == l) && (o = e[(l = { column: n, row: i }).column][l.row]),
            { column: l.column, row: l.row, id: o }
        );
    }
    calculateClosest(e, t) {
        let r,
            s = this.props.getCoordsMap()[e];
        if (null == s) return;
        let l = Number.MAX_SAFE_INTEGER;
        for (let e = 0; e < t.length; e++) {
            let n = this.props.getCoordsMap()[t[e]];
            if (null == n) continue;
            let i = Math.abs(n.top - s.top);
            if (i < l) (l = i), (r = e);
            else break;
        }
        return r;
    }
    calculateFocusedItem() {
        let { getItemGrid: e } = this.props,
            { focusedRow: t, focusedColumn: r } = this.state,
            s = e();
        return null == s || null == r || null == t || null == s[r] || null == s[r][t] ? null : s[r][t];
    }
    render() {
        return this.props.children;
    }
}
