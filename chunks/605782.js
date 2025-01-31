n.d(t, { Z: () => a });
var s = n(200651),
    i = n(192379),
    l = n(512969),
    r = n(215569);
class o extends i.Component {
    render() {
        let { children: e, location: t, history: n, staticContext: o, match: a, ...c } = this.props,
            d = null,
            h = null;
        return (
            i.Children.forEach(e, (e) => {
                if (null == d && i.isValidElement(e)) {
                    let { component: s, render: r, ...a } = e.props,
                        c = a.path || a.from;
                    null !=
                        (d =
                            null != c
                                ? (0, l.LX)(t.pathname, {
                                      ...a,
                                      path: c
                                  })
                                : null) &&
                        ((a = {
                            ...a,
                            key: c,
                            location: t,
                            match: d,
                            history: n,
                            staticContext: o
                        }),
                        null != s ? (h = i.createElement(s, a)) : null != r && (h = r(a)));
                }
            }),
            (0, s.jsx)(r.W, {
                ...c,
                children: h
            })
        );
    }
}
let a = (0, l.EN)(o);
