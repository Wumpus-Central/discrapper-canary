"use strict";
s.d(t, { J: () => o, _: () => i }), s(321073);
var n,
    l = s(64700),
    r = s(735438),
    a = s.n(r),
    i = (((n = {}).PAGE = "PAGE"), (n.GAP = "GAP"), (n.BACK = "BACK"), (n.NEXT = "NEXT"), n);
class o extends l.PureComponent {
    static defaultProps = { maxVisiblePages: 9, hideMaxPage: !1 };
    changePageTo = (e) => {
        let { selectedPage: t, onPageChange: s } = this.props;
        t !== e && null != s && s(e);
    };
    handleForward = () => {
        this.changePageTo(Math.min(this.props.selectedPage + 1, this.props.totalPageCount));
    };
    handleBackward = () => {
        this.changePageTo(Math.max(this.props.selectedPage - 1, 1));
    };
    handleJump = (e) => {
        this.changePageTo(e);
    };
    getNeighborBounds() {
        let { totalPageCount: e, maxVisiblePages: t, selectedPage: s } = this.props,
            n = Math.ceil(t / 2),
            l = Math.floor(t / 2),
            [r, a] = s <= n ? [1, t] : s > e - l ? [e - t + 1, e] : [s - n + 1, s + l];
        return [Math.max(r, 1), Math.min(a, e)];
    }
    getPageList() {
        let { totalPageCount: e, selectedPage: t, hideMaxPage: s } = this.props,
            [n, l] = this.getNeighborBounds(),
            r = { type: "BACK", key: "back", disabled: 1 === t, selected: !1, navigateToPage: this.handleBackward },
            i = { type: "NEXT", key: "next", disabled: t === e, selected: !1, navigateToPage: this.handleForward },
            o = [],
            c = [];
        return (
            n > 1 &&
                ((o = [
                    { type: "PAGE", key: "page-1", targetPage: 1, navigateToPage: () => this.handleJump(1) },
                    { type: "GAP", key: "left-gap" },
                ]),
                (n += 2)),
            l < e &&
                ((c = [{ type: "GAP", key: "right-gap" }]),
                s ||
                    c.push({ type: "PAGE", key: `page-${e}`, targetPage: e, navigateToPage: () => this.handleJump(e) }),
                (l -= 2)),
            [
                r,
                ...o,
                ...a()
                    .range(n, l + 1)
                    .map((e) => ({
                        type: "PAGE",
                        key: `page-${e}`,
                        targetPage: e,
                        selected: e === t,
                        disabled: !1,
                        navigateToPage: () => this.handleJump(e),
                    })),
                ...c,
                i,
            ]
        );
    }
    render() {
        let { totalPageCount: e, children: t } = this.props;
        return t({ pages: this.getPageList(), hasMultiplePages: e > 1 });
    }
}
