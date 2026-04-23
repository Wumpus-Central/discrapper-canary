"use strict";
n.d(t, { A: () => y });
var r = n(627968),
    i = n(64700),
    s = n(481613),
    a = n.n(s),
    o = n(422998),
    l = n(311907),
    u = n(838677),
    c = n(112834),
    d = n(821609),
    _ = n(565645),
    f = n(582322),
    p = n(531685),
    h = n(690521),
    E = n(975571),
    m = n(723702),
    g = n(837921),
    A = n(721668),
    I = n(652215),
    T = n(985018);
let S = l.Ay.connectStores([p.A], () => ({ focused: p.A.isFocused() }))(f.A);
class y extends i.PureComponent {
    handleDownload = () => {
        window.open(
            this.getPlatform() === m.PlatformTypes.WINDOWS
                ? E.A.getArticleURL(I.MVz.CORRUPT_INSTALLATION)
                : I.X7G.DOWNLOAD,
        );
    };
    getPlatform() {
        let e = a().os?.family;
        return null != e && /^win/i.test(e)
            ? m.PlatformTypes.WINDOWS
            : null != e && /darwin|os x/i.test(e)
              ? m.PlatformTypes.OSX
              : m.PlatformTypes.LINUX;
    }
    componentDidMount() {
        let e;
        (e = window.require("electron").remote.getCurrentWindow()),
            (g.Ay.minimize = () => e.minimize()),
            (g.Ay.maximize = () => {
                e.isMaximized() ? e.unmaximize() : e.maximize();
            }),
            (g.Ay.close = () => e.close());
    }
    render() {
        let e = (0, r.jsx)("div", {
            children: (0, r.jsxs)("p", {
                children: [
                    T.intl.string(T.t["4tRjHC"]),
                    " ",
                    (0, r.jsx)(_.A, {
                        src: h.Ay.getURL(u.A.convert.fromCodePoint("1f44c")),
                        emojiName: ":ok_hand:",
                        animated: !1,
                    }),
                ],
            }),
        });
        return (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)(o.mg, { children: (0, r.jsx)("html", { className: (0, c.m)(I.NJ8.DARK) }) }),
                (0, r.jsx)(S, { type: this.getPlatform() }),
                (0, r.jsx)(A.A, {
                    title: T.intl.string(T.t["3h+n+8"]),
                    note: e,
                    action: (0, r.jsx)(d.$, {
                        size: "md",
                        variant: "primary",
                        text: T.intl.string(T.t["1WjMbC"]),
                        onClick: this.handleDownload,
                    }),
                }),
            ],
        });
    }
}
