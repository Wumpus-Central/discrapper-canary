s.r(r);
var t = s(200651),
    o = s(192379),
    i = s(120356),
    n = s.n(i),
    c = s(568611),
    b = s(481060),
    l = s(710845),
    a = s(361207),
    d = s(954824),
    w = s(981631),
    m = s(388032),
    p = s(464235);
let f = [
        {
            id: 'discord',
            getName: () => m.intl.string(m.t.uON9Ul),
            url: (0, a.t3)()
        },
        {
            id: 'chrome',
            getName: () => m.intl.string(m.t['80Ut6e']),
            url: 'https://www.google.com/chrome/browser/desktop/'
        },
        {
            id: 'firefox',
            getName: () => m.intl.string(m.t.LVbA5e),
            url: 'https://www.mozilla.org/en-US/firefox/new/?scene=2'
        }
    ],
    h = {
        discord: 'browserDiscord',
        firefox: 'browserFirefox',
        chrome: 'browserChrome'
    };
class u extends o.Component {
    render() {
        let e;
        let { id: r, getName: s, url: o } = this.props.browser;
        return (
            (e =
                null != o
                    ? (0, t.jsx)(b.Anchor, {
                          className: p.btn,
                          href: o,
                          children: m.intl.string(m.t['1WjMbG'])
                      })
                    : (0, t.jsx)(c.rU, {
                          className: p.btn,
                          to: w.Z5c.APPS,
                          children: m.intl.string(m.t['1WjMbG'])
                      })),
            (0, t.jsxs)('li', {
                className: p.browserItem,
                children: [
                    (0, t.jsx)('div', { className: n()(p.browserItemText, p.browser, p[h[r]]) }),
                    (0, t.jsx)('div', {
                        className: p.browserItemText,
                        children: s()
                    }),
                    e
                ]
            })
        );
    }
}
class x extends o.Component {
    componentDidMount() {
        d.Z.launch('discord://' + this.props.location.pathname, (e) => {
            new l.Z('UnsupportedBrowser').log('discord://', e);
        });
    }
    render() {
        let e = f.map((e) => (0, t.jsx)(u, { browser: e }, e.id));
        return (0, t.jsx)('div', {
            className: p.unsupportedBrowser,
            children: (0, t.jsxs)('div', {
                className: p.wrap,
                children: [
                    (0, t.jsx)(b.H, {
                        className: p.title,
                        children: m.intl.string(m.t['3h+n+/'])
                    }),
                    (0, t.jsx)('p', {
                        className: p.message,
                        children: m.intl.string(m.t.yNDLDA)
                    }),
                    (0, t.jsx)('ul', {
                        className: p.browserList,
                        children: e
                    })
                ]
            })
        });
    }
}
r.default = x;
