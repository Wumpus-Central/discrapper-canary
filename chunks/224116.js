s.r(r),
    s.d(r, {
        default: () => g,
    });
var t = s(627968),
    o = s(64700),
    i = s(503698),
    a = s.n(i),
    d = s(758879),
    n = s(397927),
    c = s(626584),
    b = s(53505),
    l = s(877062),
    w = s(652215),
    m = s(985018),
    p = s(599098);
let h = [
        {
            id: "discord",
            getName: () => m.intl.string(m.t.uON9Ui),
            url: (0, b.SU)(),
        },
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
    f = {
        discord: "browserDiscord",
        firefox: "browserFirefox",
        chrome: "browserChrome",
    };
class x extends o.Component {
    render() {
        let e,
            { id: r, getName: s, url: o } = this.props.browser;
        return (
            (e =
                null != o
                    ? (0, t.jsx)(n.MzZ, {
                          className: p.btn,
                          href: o,
                          children: m.intl.string(m.t["1WjMbC"]),
                      })
                    : (0, t.jsx)(d.N_, {
                          className: p.btn,
                          to: w.BVt.APPS,
                          children: m.intl.string(m.t["1WjMbC"]),
                      })),
            (0, t.jsxs)("li", {
                className: p.browserItem,
                children: [
                    (0, t.jsx)("div", {
                        className: a()(p.browserItemText, p.browser, p[f[r]]),
                    }),
                    (0, t.jsx)("div", {
                        className: p.browserItemText,
                        children: s(),
                    }),
                    e,
                ],
            })
        );
    }
}
class u extends o.Component {
    componentDidMount() {
        l.A.launch("discord://" + this.props.location.pathname, (e) => {
            new c.A("UnsupportedBrowser").log("discord://", e);
        });
    }
    render() {
        let e = h.map((e) =>
            (0, t.jsx)(
                x,
                {
                    browser: e,
                },
                e.id,
            ),
        );
        return (0, t.jsx)("div", {
            className: p.unsupportedBrowser,
            children: (0, t.jsxs)("div", {
                className: p.wrap,
                children: [
                    (0, t.jsx)(n.H, {
                        className: p.title,
                        children: m.intl.string(m.t["3h+n+8"]),
                    }),
                    (0, t.jsx)("p", {
                        className: p.message,
                        children: m.intl.string(m.t.yNDLDL),
                    }),
                    (0, t.jsx)("ul", {
                        className: p.browserList,
                        children: e,
                    }),
                ],
            }),
        });
    }
}
let g = u;
