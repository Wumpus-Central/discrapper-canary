var i = n(196765),
    r = n(73153);
let a = (0, i.v)(() => ({}));
(r.h.subscribe("LOGOUT", () => a.setState({}, !0)),
    n.d(
        t,
        {},
        {
            K: function (e, t) {
                return null == a.getState()[e] && (a.setState({ [e]: t }), !0);
            },
            Rx: function (e, t) {
                a.getState()[e] === t && a.setState({ [e]: void 0 });
            },
            _C: function (e) {
                return a((t) => t[e]);
            },
        },
    ));
