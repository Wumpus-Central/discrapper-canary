r.r(s), r.d(s, { default: () => j });
var t = r(627968),
    i = r(64700),
    n = r(503698),
    o = r.n(n),
    l = r(936504),
    c = r(349288),
    d = r(707554),
    a = r(626584),
    m = r(53505),
    h = r(877062),
    p = r(652215),
    w = r(375708),
    x = r(195639);
let b = [
        { id: "discord", getName: () => w.intl.string(w.t.uON9Ui), url: (0, m.SU)() },
        {
            id: "chrome",
            getName: () => w.intl.string(w.t["80Ut6e"]),
            url: "https://www.google.com/chrome/browser/desktop/",
        },
        {
            id: "firefox",
            getName: () => w.intl.string(w.t.LVbA5X),
            url: "https://www.mozilla.org/en-US/firefox/new/?scene=2",
        },
    ],
    u = { discord: "browserDiscord", firefox: "browserFirefox", chrome: "browserChrome" };
class N extends i.Component {
    render() {
        let e,
            { id: s, getName: r, url: i } = this.props.browser;
        return (
            (e =
                null != i
                    ? (0, t.jsx)(c.Anchor, { className: x.btn, href: i, children: w.intl.string(w.t["1WjMbC"]) })
                    : (0, t.jsx)(l.N_, { className: x.btn, to: p.BVt.APPS, children: w.intl.string(w.t["1WjMbC"]) })),
            (0, t.jsxs)("li", {
                className: x.browserItem,
                children: [
                    (0, t.jsx)("div", { className: o()(x.browserItemText, x.browser, x[u[s]]) }),
                    (0, t.jsx)("div", { className: x.browserItemText, children: r() }),
                    e,
                ],
            })
        );
    }
}
class g extends i.Component {
    componentDidMount() {
        h.A.launch("discord://" + this.props.location.pathname, (e) => {
            new a.A("UnsupportedBrowser").log("discord://", e);
        });
    }
    render() {
        let e = b.map((e) => (0, t.jsx)(N, { browser: e }, e.id));
        return (0, t.jsx)("div", {
            className: x.unsupportedBrowser,
            children: (0, t.jsxs)("div", {
                className: x.wrap,
                children: [
                    (0, t.jsx)(d.H, { className: x.title, children: w.intl.string(w.t["3h+n+8"]) }),
                    (0, t.jsx)("p", { className: x.message, children: w.intl.string(w.t.yNDLDL) }),
                    (0, t.jsx)("ul", { className: x.browserList, children: e }),
                ],
            }),
        });
    }
}
let j = g;
