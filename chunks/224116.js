r.r(s);
var t = r(477900),
    i = r(582128),
    n = r(503698),
    o = r.n(n),
    l = r(561028),
    a = r(28863),
    d = r(707554),
    c = r(834730),
    m = r(626584),
    h = r(53505),
    p = r(877062),
    w = r(652215),
    b = r(792996),
    u = r(746820);
let x = [
        { id: "discord", getName: () => b.intl.string(b.t.uON9Ui), url: (0, h.SU)() },
        {
            id: "chrome",
            getName: () => b.intl.string(b.t["80Ut6e"]),
            url: "https://www.google.com/chrome/browser/desktop/",
        },
        {
            id: "firefox",
            getName: () => b.intl.string(b.t.LVbA5X),
            url: "https://www.mozilla.org/en-US/firefox/new/?scene=2",
        },
    ],
    g = { discord: "browserDiscord", firefox: "browserFirefox", chrome: "browserChrome" };
class N extends i.Component {
    render() {
        let e,
            { id: s, getName: r, url: i } = this.props.browser;
        return (
            (e =
                null != i
                    ? (0, t.jsx)(a.Anchor, { className: u.btn, href: i, children: b.intl.string(b.t["1WjMbC"]) })
                    : (0, t.jsx)(l.N_, { className: u.btn, to: w.BVt.APPS, children: b.intl.string(b.t["1WjMbC"]) })),
            (0, t.jsxs)("li", {
                className: u.browserItem,
                children: [
                    (0, t.jsx)("div", { className: o()(u.browserItemText, u.browser, u[g[s]]) }),
                    (0, t.jsx)("div", { className: u.browserItemText, children: r() }),
                    e,
                ],
            })
        );
    }
}
class j extends i.Component {
    componentDidMount() {
        p.A.launch("discord://" + this.props.location.pathname, (e) => {
            new m.A("UnsupportedBrowser").log("discord://", e);
        });
    }
    render() {
        let e = x.map((e) => (0, t.jsx)(N, { browser: e }, e.id));
        return (0, t.jsx)("div", {
            className: u.unsupportedBrowser,
            children: (0, t.jsxs)("div", {
                className: u.wrap,
                children: [
                    (0, t.jsx)(d.H, { className: u.title, children: b.intl.string(b.t["3h+n+8"]) }),
                    (0, t.jsx)(c.E, {
                        variant: "body-sm/medium",
                        color: "none",
                        tag: "p",
                        className: u.message,
                        children: b.intl.string(b.t.yNDLDL),
                    }),
                    (0, t.jsx)("ul", { className: u.browserList, children: e }),
                ],
            }),
        });
    }
}
r.d(s, {}, { default: j });
