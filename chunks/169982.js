n.d(t, { A: () => S }), n(747238), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(481613),
    s = n.n(a),
    o = n(422998),
    l = n(311907),
    c = n(838677),
    u = n(397927),
    d = n(565645),
    f = n(582322),
    p = n(531685),
    _ = n(690521),
    h = n(975571),
    m = n(723702),
    g = n(837921),
    E = n(721668),
    b = n(652215),
    y = n(985018);
function O(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function A() {
    let e = window.require("electron").remote.getCurrentWindow();
    (g.Ay.minimize = () => e.minimize()),
        (g.Ay.maximize = () => {
            e.isMaximized() ? e.unmaximize() : e.maximize();
        }),
        (g.Ay.close = () => e.close());
}
let v = l.Ay.connectStores([p.A], () => ({ focused: p.A.isFocused() }))(f.A);
class S extends i.PureComponent {
    getPlatform() {
        var e;
        let t = null == (e = s().os) ? void 0 : e.family;
        return null != t && /^win/i.test(t)
            ? m.PlatformTypes.WINDOWS
            : null != t && /darwin|os x/i.test(t)
              ? m.PlatformTypes.OSX
              : m.PlatformTypes.LINUX;
    }
    componentDidMount() {
        A();
    }
    render() {
        let e = (0, r.jsx)("div", {
            children: (0, r.jsxs)("p", {
                children: [
                    y.intl.string(y.t["4tRjHC"]),
                    " ",
                    (0, r.jsx)(d.A, {
                        src: _.Ay.getURL(c.A.convert.fromCodePoint("1f44c")),
                        emojiName: ":ok_hand:",
                        animated: !1,
                    }),
                ],
            }),
        });
        return (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)(o.mg, { children: (0, r.jsx)("html", { className: (0, u.mo9)(b.NJ8.DARK) }) }),
                (0, r.jsx)(v, { type: this.getPlatform() }),
                (0, r.jsx)(E.A, {
                    title: y.intl.string(y.t["3h+n+8"]),
                    note: e,
                    action: (0, r.jsx)(u.Button, {
                        size: "md",
                        variant: "primary",
                        text: y.intl.string(y.t["1WjMbC"]),
                        onClick: this.handleDownload,
                    }),
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            O(this, "handleDownload", () => {
                window.open(
                    this.getPlatform() === m.PlatformTypes.WINDOWS
                        ? h.A.getArticleURL(b.MVz.CORRUPT_INSTALLATION)
                        : b.X7G.DOWNLOAD,
                );
            });
    }
}
