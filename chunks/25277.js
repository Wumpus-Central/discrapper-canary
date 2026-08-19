r.d(t, { A: () => l });
var n = r(582128),
    s = r(650583);
class l extends n.Component {
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
            case s.dh.ARROW_DOWN:
            case s.dh.ARROW_UP:
            case s.dh.ARROW_LEFT:
            case s.dh.ARROW_RIGHT:
                this.focusNext(
                    (function (e) {
                        switch (e) {
                            case s.dh.ARROW_DOWN:
                                return "ARROW_DOWN";
                            case s.dh.ARROW_UP:
                                return "ARROW_UP";
                            case s.dh.ARROW_LEFT:
                                return "ARROW_LEFT";
                            case s.dh.ARROW_RIGHT:
                                return "ARROW_RIGHT";
                            default:
                                return null;
                        }
                    })(e.key),
                );
                break;
            case s.dh.ENTER:
                let r = this.calculateFocusedItem();
                null != r && null != t && (e.preventDefault(), e.stopPropagation(), t(r));
        }
    };
    focusNext(e) {
        let { getItemGrid: t, onFocus: r } = this.props,
            { focusedColumn: n, focusedRow: s } = this.state;
        if (null == e) return;
        let l = t();
        if (null == l || 0 === l.length) return;
        let i = this.getNext(l, n, s, e);
        this.setState({ focusedColumn: i.column, focusedRow: i.row }, () => {
            let e = this.calculateFocusedItem();
            null != e && null != r && r(e);
        });
    }
    wrapPosition = (e, t, r, n) => {
        let s = e.length,
            l = Math.max(r * s + t + n, 0) % s,
            i = this.calculateClosest(e[t][r], e[l]) ?? r,
            a = 0;
        return n < 0 && l > t && (a = -1), n > 0 && l < t && (a = 1), { column: l, row: i + a };
    };
    getNext(e, t, r, n) {
        let s, l, i, a;
        if (null == t || null == r) (l = 0), (i = 0), (s = { column: 0, row: 0 });
        else
            switch (((l = t), (i = r), n)) {
                case "ARROW_UP":
                    s = { column: l, row: Math.max(i - 1, 0) };
                    break;
                case "ARROW_DOWN":
                    s = { column: l, row: Math.min(i + 1, e[l].length - 1) };
                    break;
                case "ARROW_LEFT":
                    s = this.wrapPosition(e, l, i, -1);
                    break;
                case "ARROW_RIGHT":
                    s = this.wrapPosition(e, l, i, 1);
            }
        return (
            null != s && (a = e[s.column]?.[s.row]),
            (null == a || null == s) && ((s = { column: l, row: i }), (a = e[s.column]?.[s.row])),
            { column: s.column, row: s.row, id: a }
        );
    }
    calculateClosest(e, t) {
        let r,
            n = this.props.getCoordsMap()[e];
        if (null == n) return;
        let s = Number.MAX_SAFE_INTEGER;
        for (let e = 0; e < t.length; e++) {
            let l = this.props.getCoordsMap()[t[e]];
            if (null == l) continue;
            let i = Math.abs(l.top - n.top);
            if (i < s) (s = i), (r = e);
            else break;
        }
        return r;
    }
    calculateFocusedItem() {
        let { getItemGrid: e } = this.props,
            { focusedRow: t, focusedColumn: r } = this.state,
            n = e();
        return null == n || null == r || null == t || null == n[r] || null == n[r][t] ? null : n[r][t];
    }
    render() {
        return this.props.children;
    }
}
