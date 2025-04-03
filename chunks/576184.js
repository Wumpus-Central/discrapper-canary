s.r(r), s.d(r, { default: () => N });
var o = s(200651),
    t = s(192379),
    a = s(120356),
    c = s.n(a),
    i = s(568611),
    n = s(481060),
    d = s(710845),
    w = s(361207),
    l = s(954824),
    b = s(981631),
    m = s(388032),
    p = s(764406);
let h = [
        {
            id: 'discord',
            getName: () => m.NW.string(m.t.uON9Ul),
            url: (0, w.t3)()
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
class u extends t.Component {
    render() {
        let e,
            { id: r, getName: s, url: t } = this.props.browser;
        return (
            (e =
                null != t
                    ? (0, o.jsx)(n.eee, {
                          className: p.btn,
                          href: t,
                          children: m.NW.string(m.t['1WjMbG'])
                      })
                    : (0, o.jsx)(i.rU, {
                          className: p.btn,
                          to: b.Z5c.APPS,
                          children: m.NW.string(m.t['1WjMbG'])
                      })),
            (0, o.jsxs)('li', {
                className: p.browserItem,
                children: [
                    (0, o.jsx)('div', { className: c()(p.browserItemText, p.browser, p[_[r]]) }),
                    (0, o.jsx)('div', {
                        className: p.browserItemText,
                        children: s()
                    }),
                    e
                ]
            })
        );
    }
}
class x extends t.Component {
    componentDidMount() {
        l.Z.launch('discord://' + this.props.location.pathname, (e) => {
            new d.Z('UnsupportedBrowser').log('discord://', e);
        });
    }
    render() {
        let e = h.map((e) => (0, o.jsx)(u, { browser: e }, e.id));
        return (0, o.jsx)('div', {
            className: p.unsupportedBrowser,
            children: (0, o.jsxs)('div', {
                className: p.wrap,
                children: [
                    (0, o.jsx)(n.H, {
                        className: p.title,
                        children: m.NW.string(m.t['3h+n+/'])
                    }),
                    (0, o.jsx)('p', {
                        className: p.message,
                        children: m.NW.string(m.t.yNDLDA)
                    }),
                    (0, o.jsx)('ul', {
                        className: p.browserList,
                        children: e
                    })
                ]
            })
        });
    }
}
let N = x;
