s.r(r), s.d(r, { default: () => N });
var t = s(200651),
    o = s(192379),
    a = s(120356),
    c = s.n(a),
    i = s(568611),
    n = s(481060),
    d = s(710845),
    l = s(361207),
    w = s(954824),
    b = s(981631),
    m = s(388032),
    p = s(227831);
let h = [
        {
            id: 'discord',
            getName: () => m.NW.string(m.t.uON9Ul),
            url: (0, l.t3)()
        },
        {
            id: 'chrome',
            getName: () => m.NW.string(m.t['80Ut6e']),
            url: 'https://www.google.com/chrome/browser/desktop/'
        },
        {
            id: 'firefox',
            getName: () => m.NW.string(m.t.LVbA5e),
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
                    ? (0, t.jsx)(n.eee, {
                          className: p.btn,
                          href: o,
                          children: m.NW.string(m.t['1WjMbG'])
                      })
                    : (0, t.jsx)(i.rU, {
                          className: p.btn,
                          to: b.Z5c.APPS,
                          children: m.NW.string(m.t['1WjMbG'])
                      })),
            (0, t.jsxs)('li', {
                className: p.browserItem,
                children: [
                    (0, t.jsx)('div', { className: c()(p.browserItemText, p.browser, p[_[r]]) }),
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
            new d.Z('UnsupportedBrowser').log('discord://', e);
        });
    }
    render() {
        let e = h.map((e) => (0, t.jsx)(u, { browser: e }, e.id));
        return (0, t.jsx)('div', {
            className: p.unsupportedBrowser,
            children: (0, t.jsxs)('div', {
                className: p.wrap,
                children: [
                    (0, t.jsx)(n.H, {
                        className: p.title,
                        children: m.NW.string(m.t['3h+n+/'])
                    }),
                    (0, t.jsx)('p', {
                        className: p.message,
                        children: m.NW.string(m.t.yNDLDA)
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
let N = x;
