s.r(r), s.d(r, { default: () => N });
var t = s(627968),
    o = s(64700),
    i = s(503698),
    a = s.n(i),
    n = s(936504),
    c = s(349288),
    l = s(707554),
    d = s(626584),
    w = s(53505),
    b = s(877062),
    m = s(652215),
    p = s(985018),
    h = s(195639);
let _ = [
        { id: "discord", getName: () => p.intl.string(p.t.uON9Ui), url: (0, w.SU)() },
        {
            id: "chrome",
            getName: () => p.intl.string(p.t["80Ut6e"]),
            url: "https://www.google.com/chrome/browser/desktop/",
        },
        {
            id: "firefox",
            getName: () => p.intl.string(p.t.LVbA5X),
            url: "https://www.mozilla.org/en-US/firefox/new/?scene=2",
        },
    ],
    x = { discord: "browserDiscord", firefox: "browserFirefox", chrome: "browserChrome" };
class u extends o.Component {
    render() {
        let e,
            { id: r, getName: s, url: o } = this.props.browser;
        return (
            (e =
                null != o
                    ? (0, t.jsx)(c.Anchor, { className: h.btn, href: o, children: p.intl.string(p.t["1WjMbC"]) })
                    : (0, t.jsx)(n.N_, { className: h.btn, to: m.BVt.APPS, children: p.intl.string(p.t["1WjMbC"]) })),
            (0, t.jsxs)("li", {
                className: h.browserItem,
                children: [
                    (0, t.jsx)("div", { className: a()(h.browserItemText, h.browser, h[x[r]]) }),
                    (0, t.jsx)("div", { className: h.browserItemText, children: s() }),
                    e,
                ],
            })
        );
    }
}
class g extends o.Component {
    componentDidMount() {
        b.A.launch("discord://" + this.props.location.pathname, (e) => {
            new d.A("UnsupportedBrowser").log("discord://", e);
        });
    }
    render() {
        let e = _.map((e) => (0, t.jsx)(u, { browser: e }, e.id));
        return (0, t.jsx)("div", {
            className: h.unsupportedBrowser,
            children: (0, t.jsxs)("div", {
                className: h.wrap,
                children: [
                    (0, t.jsx)(l.H, { className: h.title, children: p.intl.string(p.t["3h+n+8"]) }),
                    (0, t.jsx)("p", { className: h.message, children: p.intl.string(p.t.yNDLDL) }),
                    (0, t.jsx)("ul", { className: h.browserList, children: e }),
                ],
            }),
        });
    }
}
let N = g;
