s.r(r), s.d(r, { default: () => g });
var t = s(627968),
    o = s(64700),
    i = s(503698),
    a = s.n(i),
    n = s(758879),
    c = s(397927),
    l = s(626584),
    d = s(53505),
    w = s(877062),
    b = s(652215),
    m = s(985018),
    p = s(599098);
let _ = [
        { id: "discord", getName: () => m.intl.string(m.t.uON9Ui), url: (0, d.SU)() },
        {
            id: "chrome",
            getName: () => m.intl.string(m.t["80Ut6e"]),
            url: "https://www.google.com/chrome/browser/desktop/",
        },
        {
            id: "firefox",
            getName: () => m.intl.string(m.t.LVbA5X),
            url: "https://www.mozilla.org/en-US/firefox/new/?scene=2",
        },
    ],
    h = { discord: "browserDiscord", firefox: "browserFirefox", chrome: "browserChrome" };
class x extends o.Component {
    render() {
        let e,
            { id: r, getName: s, url: o } = this.props.browser;
        return (
            (e =
                null != o
                    ? (0, t.jsx)(c.MzZ, { className: p.btn, href: o, children: m.intl.string(m.t["1WjMbC"]) })
                    : (0, t.jsx)(n.N_, { className: p.btn, to: b.BVt.APPS, children: m.intl.string(m.t["1WjMbC"]) })),
            (0, t.jsxs)("li", {
                className: p.browserItem,
                children: [
                    (0, t.jsx)("div", { className: a()(p.browserItemText, p.browser, p[h[r]]) }),
                    (0, t.jsx)("div", { className: p.browserItemText, children: s() }),
                    e,
                ],
            })
        );
    }
}
class u extends o.Component {
    componentDidMount() {
        w.A.launch("discord://" + this.props.location.pathname, (e) => {
            new l.A("UnsupportedBrowser").log("discord://", e);
        });
    }
    render() {
        let e = _.map((e) => (0, t.jsx)(x, { browser: e }, e.id));
        return (0, t.jsx)("div", {
            className: p.unsupportedBrowser,
            children: (0, t.jsxs)("div", {
                className: p.wrap,
                children: [
                    (0, t.jsx)(c.H, { className: p.title, children: m.intl.string(m.t["3h+n+8"]) }),
                    (0, t.jsx)("p", { className: p.message, children: m.intl.string(m.t.yNDLDL) }),
                    (0, t.jsx)("ul", { className: p.browserList, children: e }),
                ],
            }),
        });
    }
}
let g = u;
