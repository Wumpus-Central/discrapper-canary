n.d(t, { Z: () => v }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(18998),
    s = n(664915),
    a = n(888369),
    c = n(358652),
    u = n(771845),
    d = n(613060),
    h = n(451478),
    p = n(251625),
    f = n(981631),
    g = n(388032);
let m = 'app-download-item',
    b = 'add-server-item';
function y() {
    return !1;
}
function _(e) {
    var t;
    let n = a.default.getMutableGuildStates();
    return (e === f.x8Z.SERVER_DISCOVERY_BADGE && !d.Z.hasViewed(f.x8Z.SERVER_DISCOVERY_BADGE)) || (e !== m && e !== b && (null == (t = n[null != e ? e : 'null']) ? void 0 : t.highImportanceMentionCount) > 0);
}
let O = (0, p.oH)((e, t, n) => ['null', ...t, ...e, b, f.x8Z.E3_SERVER_DISCOVERY_BADGE, m]),
    v = i.forwardRef(function (e, t) {
        var n, i;
        let d = (0, l.Wu)([u.ZP, c.Z, a.default], () => O(u.ZP.getGuildFolders(), c.Z.getUnreadPrivateChannelIds(), a.default.getStoreChangeSentinel())),
            p = (0, l.e7)([h.Z], () => h.Z.isFocused()),
            f = (0, l.e7)([s.Z], () => s.Z.getExpandedFolders());
        return (0, r.jsx)(
            o.Z,
            ((n = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        r.forEach(function (t) {
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })({}, e)),
            (i = i =
                {
                    ref: t,
                    items: d,
                    isUnread: y,
                    textUnread: g.NW.string(g.t.y2b7CA),
                    textMention: g.NW.string(g.t.y2b7CA),
                    isMentioned: _,
                    animate: p,
                    expandedFolders: f
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(i)).forEach(function (e) {
                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                  }),
            n)
        );
    });
