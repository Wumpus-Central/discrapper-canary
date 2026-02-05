"use strict";
n.d(t, { A: () => S });
var r = n(627968),
    i = n(64700),
    a = n(481613),
    s = n.n(a),
    o = n(422998),
    l = n(311907),
    u = n(838677),
    c = n(397927),
    d = n(565645),
    _ = n(582322),
    f = n(531685),
    p = n(690521),
    h = n(975571),
    m = n(723702),
    g = n(837921),
    E = n(721668),
    A = n(652215),
    I = n(985018);
function T() {
    let e = window.require("electron").remote.getCurrentWindow();
    (g.Ay.minimize = () => e.minimize()),
        (g.Ay.maximize = () => {
            e.isMaximized() ? e.unmaximize() : e.maximize();
        }),
        (g.Ay.close = () => e.close());
}
let y = l.Ay.connectStores([f.A], () => ({ focused: f.A.isFocused() }))(_.A);
class S extends i.PureComponent {
    handleDownload = () => {
        window.open(
            this.getPlatform() === m.PlatformTypes.WINDOWS
                ? h.A.getArticleURL(A.MVz.CORRUPT_INSTALLATION)
                : A.X7G.DOWNLOAD,
        );
    };
    getPlatform() {
        let e = s().os?.family;
        return null != e && /^win/i.test(e)
            ? m.PlatformTypes.WINDOWS
            : null != e && /darwin|os x/i.test(e)
              ? m.PlatformTypes.OSX
              : m.PlatformTypes.LINUX;
    }
    componentDidMount() {
        T();
    }
    render() {
        let e = (0, r.jsx)("div", {
            children: (0, r.jsxs)("p", {
                children: [
                    I.intl.string(I.t["4tRjHC"]),
                    " ",
                    (0, r.jsx)(d.A, {
                        src: p.Ay.getURL(u.A.convert.fromCodePoint("1f44c")),
                        emojiName: ":ok_hand:",
                        animated: !1,
                    }),
                ],
            }),
        });
        return (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)(o.mg, { children: (0, r.jsx)("html", { className: (0, c.mo9)(A.NJ8.DARK) }) }),
                (0, r.jsx)(y, { type: this.getPlatform() }),
                (0, r.jsx)(E.A, {
                    title: I.intl.string(I.t["3h+n+8"]),
                    note: e,
                    action: (0, r.jsx)(c.Button, {
                        size: "md",
                        variant: "primary",
                        text: I.intl.string(I.t["1WjMbC"]),
                        onClick: this.handleDownload,
                    }),
                }),
            ],
        });
    }
}
