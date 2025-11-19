n.d(t, { Z: () => O }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(392711),
    a = n.n(l),
    s = n(442837),
    o = n(239091),
    c = n(524331),
    u = n(768419),
    d = n(831506),
    p = n(699516),
    f = n(594174),
    h = n(823379),
    g = n(824138),
    m = n(658244),
    _ = n(388032);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class E extends i.PureComponent {
    hasParty(e) {
        return e.length > 1;
    }
    handleStopListening() {
        (0, c.Z)();
    }
    render() {
        let { currentUser: e, host: t, party: n } = this.props;
        return this.hasParty(n) && null != e
            ? (0, r.jsx)(g.Z, {
                  currentUser: e,
                  host: t,
                  party: n,
                  renderOverflowPopout: this.renderOverflowPopout,
                  onStopListening: this.handleStopListening,
                  onUserContextMenu: this.handleUserContextMenu,
              })
            : null;
    }
    constructor(...e) {
        super(...e),
            b(this, "handleUserContextMenu", (e, t) => {
                (0, o.jW)(e, async () => {
                    let { default: e } = await Promise.all([n.e("79695"), n.e("69220"), n.e("71129")]).then(
                        n.bind(n, 881351),
                    );
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            (function (e, t) {
                                return (
                                    (t = null != t ? t : {}),
                                    Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                                        : (function (e, t) {
                                              var n = Object.keys(e);
                                              if (Object.getOwnPropertySymbols) {
                                                  var r = Object.getOwnPropertySymbols(e);
                                                  n.push.apply(n, r);
                                              }
                                              return n;
                                          })(Object(t)).forEach(function (n) {
                                              Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                                          }),
                                    e
                                );
                            })(
                                (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            r = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols &&
                                            (r = r.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                }),
                                            )),
                                            r.forEach(function (t) {
                                                b(e, t, n[t]);
                                            });
                                    }
                                    return e;
                                })({}, n),
                                { user: t },
                            ),
                        );
                });
            }),
            b(this, "renderOverflowPopout", () => {
                let { party: e } = this.props;
                return (0, r.jsx)(m.Z, {
                    party: e,
                    header: _.intl.formatToPlainString(_.t.I9et1z, { count: e.length }),
                });
            });
    }
}
let O = s.ZP.connectStores([u.Z, f.default, p.Z, d.Z], () => {
    let e,
        t,
        n = u.Z.getSyncingWith(),
        r = u.Z.getActivity(),
        i = f.default.getCurrentUser(),
        l = [];
    if (
        (null != n
            ? ((e = f.default.getUser(n.userId)), (t = n.partyId))
            : null != r && null != r.party && null != r.party.id && ((e = i), (t = r.party.id)),
        null != t)
    ) {
        var s;
        l = a()(Array.from(null != (s = d.Z.getParty(t)) ? s : []))
            .map((e) => f.default.getUser(e))
            .filter(h.lm)
            .orderBy([(t) => null == e || e.id === t.id, (e) => p.Z.isFriend(e.id)], ["desc", "desc"])
            .value();
    }
    return {
        currentUser: i,
        host: e,
        party: l,
    };
})(E);
