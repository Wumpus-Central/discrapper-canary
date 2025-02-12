s.r(r), s.d(r, { default: () => g });
var t = s(200651),
    o = s(192379),
    i = s(120356),
    n = s.n(i),
    a = s(568611),
    c = s(481060),
    l = s(710845),
    d = s(361207),
    w = s(954824),
    b = s(981631),
    m = s(388032),
    p = s(877815);
let h = [
        {
            id: 'discord',
            getName: () => m.intl.string(m.t.uON9Ul),
            url: (0, d.t3)()
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
    _ = {
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
                    ? (0, t.jsx)(c.eee, {
                          className: p.btn,
                          href: o,
                          children: m.intl.string(m.t['1WjMbG'])
                      })
                    : (0, t.jsx)(a.rU, {
                          className: p.btn,
                          to: b.Z5c.APPS,
                          children: m.intl.string(m.t['1WjMbG'])
                      })),
            (0, t.jsxs)('li', {
                className: p.browserItem,
                children: [
                    (0, t.jsx)('div', { className: n()(p.browserItemText, p.browser, p[_[r]]) }),
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
        w.Z.launch('discord://' + this.props.location.pathname, (e) => {
            new l.Z('UnsupportedBrowser').log('discord://', e);
        });
    }
    render() {
        let e = h.map((e) => (0, t.jsx)(u, { browser: e }, e.id));
        return (0, t.jsx)('div', {
            className: p.unsupportedBrowser,
            children: (0, t.jsxs)('div', {
                className: p.wrap,
                children: [
                    (0, t.jsx)(c.H, {
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
let g = x;
