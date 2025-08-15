n.d(t, { Z: () => E }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(392711),
    a = n.n(l),
    o = n(442837),
    s = n(239091),
    c = n(476669),
    u = n(524331),
    d = n(768419),
    p = n(831506),
    f = n(699516),
    h = n(594174),
    g = n(823379),
    m = n(824138),
    b = n(388032);
function _(e, t, n) {
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
class O extends i.PureComponent {
    hasParty(e) {
        return e.length > 1;
    }
    handleStopListening() {
        (0, u.Z)();
    }
    render() {
        let { currentUser: e, host: t, party: n } = this.props;
        return this.hasParty(n) && null != e
            ? (0, r.jsx)(m.Z, {
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
            _(this, "handleUserContextMenu", (e, t) => {
                (0, s.jW)(e, async () => {
                    let { default: e } = await Promise.all([n.e("79695"), n.e("69220"), n.e("74820")]).then(
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
                                                _(e, t, n[t]);
                                            });
                                    }
                                    return e;
                                })({}, n),
                                { user: t },
                            ),
                        );
                });
            }),
            _(this, "renderOverflowPopout", () => {
                let { party: e } = this.props;
                return (0, r.jsx)(c.Z, {
                    party: e,
                    header: b.intl.formatToPlainString(b.t.I9et19, { count: e.length }),
                });
            });
    }
}
let E = o.ZP.connectStores([d.Z, h.default, f.Z, p.Z], () => {
    let e,
        t,
        n = d.Z.getSyncingWith(),
        r = d.Z.getActivity(),
        i = h.default.getCurrentUser(),
        l = [];
    if (
        (null != n
            ? ((e = h.default.getUser(n.userId)), (t = n.partyId))
            : null != r && null != r.party && null != r.party.id && ((e = i), (t = r.party.id)),
        null != t)
    ) {
        var o;
        l = a()(Array.from(null != (o = p.Z.getParty(t)) ? o : []))
            .map((e) => h.default.getUser(e))
            .filter(g.lm)
            .orderBy([(t) => null == e || e.id === t.id, (e) => f.Z.isFriend(e.id)], ["desc", "desc"])
            .value();
    }
    return {
        currentUser: i,
        host: e,
        party: l,
    };
})(O);
