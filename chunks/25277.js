"use strict";
n.d(t, { A: () => a });
var i = n(582128),
    r = n(650583);
class a extends i.Component {
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
            case r.dh.ARROW_DOWN:
            case r.dh.ARROW_UP:
            case r.dh.ARROW_LEFT:
            case r.dh.ARROW_RIGHT:
                this.focusNext(
                    (function (e) {
                        switch (e) {
                            case r.dh.ARROW_DOWN:
                                return "ARROW_DOWN";
                            case r.dh.ARROW_UP:
                                return "ARROW_UP";
                            case r.dh.ARROW_LEFT:
                                return "ARROW_LEFT";
                            case r.dh.ARROW_RIGHT:
                                return "ARROW_RIGHT";
                            default:
                                return null;
                        }
                    })(e.key),
                );
                break;
            case r.dh.ENTER:
                let n = this.calculateFocusedItem();
                null != n && null != t && (e.preventDefault(), e.stopPropagation(), t(n));
        }
    };
    focusNext(e) {
        let { getItemGrid: t, onFocus: n } = this.props,
            { focusedColumn: i, focusedRow: r } = this.state;
        if (null == e) return;
        let a = t();
        if (null == a || 0 === a.length) return;
        let s = this.getNext(a, i, r, e);
        this.setState({ focusedColumn: s.column, focusedRow: s.row }, () => {
            let e = this.calculateFocusedItem();
            null != e && null != n && n(e);
        });
    }
    wrapPosition = (e, t, n, i) => {
        let r = e.length,
            a = Math.max(n * r + t + i, 0) % r,
            s = this.calculateClosest(e[t][n], e[a]) ?? n,
            l = 0;
        return i < 0 && a > t && (l = -1), i > 0 && a < t && (l = 1), { column: a, row: s + l };
    };
    getNext(e, t, n, i) {
        let r, a, s, l;
        if (null == t || null == n) (a = 0), (s = 0), (r = { column: 0, row: 0 });
        else
            switch (((a = t), (s = n), i)) {
                case "ARROW_UP":
                    r = { column: a, row: Math.max(s - 1, 0) };
                    break;
                case "ARROW_DOWN":
                    r = { column: a, row: Math.min(s + 1, e[a].length - 1) };
                    break;
                case "ARROW_LEFT":
                    r = this.wrapPosition(e, a, s, -1);
                    break;
                case "ARROW_RIGHT":
                    r = this.wrapPosition(e, a, s, 1);
            }
        return (
            null != r && (l = e[r.column]?.[r.row]),
            (null == l || null == r) && ((r = { column: a, row: s }), (l = e[r.column]?.[r.row])),
            { column: r.column, row: r.row, id: l }
        );
    }
    calculateClosest(e, t) {
        let n,
            i = this.props.getCoordsMap()[e];
        if (null == i) return;
        let r = Number.MAX_SAFE_INTEGER;
        for (let e = 0; e < t.length; e++) {
            let a = this.props.getCoordsMap()[t[e]];
            if (null == a) continue;
            let s = Math.abs(a.top - i.top);
            if (s < r) (r = s), (n = e);
            else break;
        }
        return n;
    }
    calculateFocusedItem() {
        let { getItemGrid: e } = this.props,
            { focusedRow: t, focusedColumn: n } = this.state,
            i = e();
        return null == i || null == n || null == t || null == i[n] || null == i[n][t] ? null : i[n][t];
    }
    render() {
        return this.props.children;
    }
}
