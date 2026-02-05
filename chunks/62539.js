"use strict";
n.d(t, { J: () => o, _: () => s }), n(321073);
var r = n(64700),
    i = n(735438),
    a = n.n(i),
    s = (function (e) {
        return (e.PAGE = "PAGE"), (e.GAP = "GAP"), (e.BACK = "BACK"), (e.NEXT = "NEXT"), e;
    })({});
class o extends r.PureComponent {
    static defaultProps = { maxVisiblePages: 9, hideMaxPage: !1 };
    changePageTo = (e) => {
        let { selectedPage: t, onPageChange: n } = this.props;
        t !== e && null != n && n(e);
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
        let { totalPageCount: e, maxVisiblePages: t, selectedPage: n } = this.props,
            r = Math.ceil(t / 2),
            i = Math.floor(t / 2),
            a = [1, e],
            [s, o] = (a = n <= r ? [1, t] : n > e - i ? [e - t + 1, e] : [n - r + 1, n + i]);
        return [Math.max(s, 1), Math.min(o, e)];
    }
    getPageList() {
        let { totalPageCount: e, selectedPage: t, hideMaxPage: n } = this.props,
            [r, i] = this.getNeighborBounds(),
            s = { type: "BACK", key: "back", disabled: 1 === t, selected: !1, navigateToPage: this.handleBackward },
            o = { type: "NEXT", key: "next", disabled: t === e, selected: !1, navigateToPage: this.handleForward },
            l = [],
            u = [];
        return (
            r > 1 &&
                ((l = [
                    { type: "PAGE", key: "page-1", targetPage: 1, navigateToPage: () => this.handleJump(1) },
                    { type: "GAP", key: "left-gap" },
                ]),
                (r += 2)),
            i < e &&
                ((u = [{ type: "GAP", key: "right-gap" }]),
                n ||
                    u.push({ type: "PAGE", key: `page-${e}`, targetPage: e, navigateToPage: () => this.handleJump(e) }),
                (i -= 2)),
            [
                s,
                ...l,
                ...a()
                    .range(r, i + 1)
                    .map((e) => ({
                        type: "PAGE",
                        key: `page-${e}`,
                        targetPage: e,
                        selected: e === t,
                        disabled: !1,
                        navigateToPage: () => this.handleJump(e),
                    })),
                ...u,
                o,
            ]
        );
    }
    render() {
        let { totalPageCount: e, children: t } = this.props;
        return t({ pages: this.getPageList(), hasMultiplePages: e > 1 });
    }
}
