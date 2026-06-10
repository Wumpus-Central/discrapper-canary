"use strict";
n.d(t, { A: () => s });
var i = n(64700),
    r = n(650583);
class s extends i.Component {
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
        let s = t();
        if (null == s || 0 === s.length) return;
        let a = this.getNext(s, i, r, e);
        this.setState({ focusedColumn: a.column, focusedRow: a.row }, () => {
            let e = this.calculateFocusedItem();
            null != e && null != n && n(e);
        });
    }
    wrapPosition = (e, t, n, i) => {
        let r = e.length,
            s = Math.max(n * r + t + i, 0) % r,
            a = this.calculateClosest(e[t][n], e[s]) ?? n,
            o = 0;
        return i < 0 && s > t && (o = -1), i > 0 && s < t && (o = 1), { column: s, row: a + o };
    };
    getNext(e, t, n, i) {
        let r, s, a, o;
        if (null == t || null == n) (s = 0), (a = 0), (r = { column: 0, row: 0 });
        else
            switch (((s = t), (a = n), i)) {
                case "ARROW_UP":
                    r = { column: s, row: Math.max(a - 1, 0) };
                    break;
                case "ARROW_DOWN":
                    r = { column: s, row: Math.min(a + 1, e[s].length - 1) };
                    break;
                case "ARROW_LEFT":
                    r = this.wrapPosition(e, s, a, -1);
                    break;
                case "ARROW_RIGHT":
                    r = this.wrapPosition(e, s, a, 1);
            }
        return (
            null != r && (o = e[r.column]?.[r.row]),
            (null == o || null == r) && ((r = { column: s, row: a }), (o = e[r.column]?.[r.row])),
            { column: r.column, row: r.row, id: o }
        );
    }
    calculateClosest(e, t) {
        let n,
            i = this.props.getCoordsMap()[e];
        if (null == i) return;
        let r = Number.MAX_SAFE_INTEGER;
        for (let e = 0; e < t.length; e++) {
            let s = this.props.getCoordsMap()[t[e]];
            if (null == s) continue;
            let a = Math.abs(s.top - i.top);
            if (a < r) (r = a), (n = e);
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
