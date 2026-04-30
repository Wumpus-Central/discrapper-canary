r.d(t, { A: () => l });
var s = r(64700),
    n = r(650583);
class l extends s.Component {
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
            case n.dh.ARROW_DOWN:
            case n.dh.ARROW_UP:
            case n.dh.ARROW_LEFT:
            case n.dh.ARROW_RIGHT:
                this.focusNext(
                    (function (e) {
                        switch (e) {
                            case n.dh.ARROW_DOWN:
                                return "ARROW_DOWN";
                            case n.dh.ARROW_UP:
                                return "ARROW_UP";
                            case n.dh.ARROW_LEFT:
                                return "ARROW_LEFT";
                            case n.dh.ARROW_RIGHT:
                                return "ARROW_RIGHT";
                            default:
                                return null;
                        }
                    })(e.key),
                );
                break;
            case n.dh.ENTER:
                let r = this.calculateFocusedItem();
                null != r && null != t && (e.preventDefault(), e.stopPropagation(), t(r));
        }
    };
    focusNext(e) {
        let { getItemGrid: t, onFocus: r } = this.props,
            { focusedColumn: s, focusedRow: n } = this.state;
        if (null == e) return;
        let l = t();
        if (null == l || 0 === l.length) return;
        let i = this.getNext(l, s, n, e);
        this.setState({ focusedColumn: i.column, focusedRow: i.row }, () => {
            let e = this.calculateFocusedItem();
            null != e && null != r && r(e);
        });
    }
    wrapPosition = (e, t, r, s) => {
        let n = e.length,
            l = Math.max(r * n + t + s, 0) % n,
            i = this.calculateClosest(e[t][r], e[l]) ?? r,
            a = 0;
        return s < 0 && l > t && (a = -1), s > 0 && l < t && (a = 1), { column: l, row: i + a };
    };
    getNext(e, t, r, s) {
        let n, l, i, a;
        if (null == t || null == r) (l = 0), (i = 0), (n = { column: 0, row: 0 });
        else
            switch (((l = t), (i = r), s)) {
                case "ARROW_UP":
                    n = { column: l, row: Math.max(i - 1, 0) };
                    break;
                case "ARROW_DOWN":
                    n = { column: l, row: Math.min(i + 1, e[l].length - 1) };
                    break;
                case "ARROW_LEFT":
                    n = this.wrapPosition(e, l, i, -1);
                    break;
                case "ARROW_RIGHT":
                    n = this.wrapPosition(e, l, i, 1);
            }
        return (
            null != n && (a = e[n.column]?.[n.row]),
            (null == a || null == n) && ((n = { column: l, row: i }), (a = e[n.column]?.[n.row])),
            { column: n.column, row: n.row, id: a }
        );
    }
    calculateClosest(e, t) {
        let r,
            s = this.props.getCoordsMap()[e];
        if (null == s) return;
        let n = Number.MAX_SAFE_INTEGER;
        for (let e = 0; e < t.length; e++) {
            let l = this.props.getCoordsMap()[t[e]];
            if (null == l) continue;
            let i = Math.abs(l.top - s.top);
            if (i < n) (n = i), (r = e);
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
