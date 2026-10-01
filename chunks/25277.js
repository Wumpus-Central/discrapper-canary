s.d(t, { A: () => l });
var r = s(582128),
    n = s(650583);
class l extends r.Component {
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
                let s = this.calculateFocusedItem();
                null != s && null != t && (e.preventDefault(), e.stopPropagation(), t(s, { shiftKey: e.shiftKey }));
        }
    };
    focusNext(e) {
        let { getItemGrid: t, onFocus: s } = this.props,
            { focusedColumn: r, focusedRow: n } = this.state;
        if (null == e) return;
        let l = t();
        if (null == l || 0 === l.length) return;
        let i = this.getNext(l, r, n, e);
        this.setState({ focusedColumn: i.column, focusedRow: i.row }, () => {
            let e = this.calculateFocusedItem();
            null != e && null != s && s(e);
        });
    }
    wrapPosition = (e, t, s, r) => {
        let n = e.length,
            l = Math.max(s * n + t + r, 0) % n,
            i = this.calculateClosest(e[t][s], e[l]) ?? s,
            a = 0;
        return (r < 0 && l > t && (a = -1), r > 0 && l < t && (a = 1), { column: l, row: i + a });
    };
    getNext(e, t, s, r) {
        let n, l, i, a;
        if (null == t || null == s) ((l = 0), (i = 0), (n = { column: 0, row: 0 }));
        else
            switch (((l = t), (i = s), r)) {
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
        let s,
            r = this.props.getCoordsMap()[e];
        if (null == r) return;
        let n = Number.MAX_SAFE_INTEGER;
        for (let e = 0; e < t.length; e++) {
            let l = this.props.getCoordsMap()[t[e]];
            if (null == l) continue;
            let i = Math.abs(l.top - r.top);
            if (i < n) ((n = i), (s = e));
            else break;
        }
        return s;
    }
    calculateFocusedItem() {
        let { getItemGrid: e } = this.props,
            { focusedRow: t, focusedColumn: s } = this.state,
            r = e();
        return null == r || null == s || null == t || null == r[s] || null == r[s][t] ? null : r[s][t];
    }
    render() {
        return this.props.children;
    }
}
