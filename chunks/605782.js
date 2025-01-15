var i = n(200651),
    r = n(192379),
    s = n(512969),
    l = n(215569);
class o extends r.Component {
    render() {
        let { children: e, location: t, history: n, staticContext: o, match: a, ...c } = this.props,
            d = null,
            u = null;
        return (
            r.Children.forEach(e, (e) => {
                if (null == d && r.isValidElement(e)) {
                    let { component: i, render: l, ...a } = e.props,
                        c = a.path || a.from;
                    if (
                        null !=
                        (d =
                            null != c
                                ? (0, s.LX)(t.pathname, {
                                      ...a,
                                      path: c
                                  })
                                : null)
                    )
                        (a = {
                            ...a,
                            key: c,
                            location: t,
                            match: d,
                            history: n,
                            staticContext: o
                        }),
                            null != i ? (u = r.createElement(i, a)) : null != l && (u = l(a));
                }
            }),
            (0, i.jsx)(l.W, {
                ...c,
                children: u
            })
        );
    }
}
t.Z = (0, s.EN)(o);
