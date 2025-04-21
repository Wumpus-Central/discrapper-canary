n.d(t, { Z: () => y }), n(539854), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(239091),
    s = n(749210),
    a = n(905423),
    c = n(664915),
    u = n(888369),
    d = n(430824),
    h = n(823379),
    p = n(179809),
    f = n(652376),
    g = n(981631);
function m(e) {
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
}
function b(e, t) {
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
}
let y = i.memo(function (e) {
    var { folderNode: t } = e,
        y = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['folderNode']);
    let { id: _, name: O, color: v, children: C } = t,
        j = C.map((e) => e.id),
        x = (0, a.Z)((e) => e.guildId),
        S = (0, l.e7)([c.Z], () => c.Z.isFolderExpanded(_)),
        E = (function (e) {
            let t = e.children
                    .map((e) => {
                        let t = e.id,
                            n = d.Z.getGuild(t);
                        return null != n ? n.name : null;
                    })
                    .filter(h.lm),
                n = 2 * g.dYL,
                r = [];
            for (let e of t) (e.length < n || 0 === r.length) && (r.push(e), (n -= e.length));
            return ''.concat(r.join(', ')).concat(r.length < t.length ? ', ...' : '');
        })(t),
        I = (0, f.Z)(t),
        {
            mentionCount: P,
            isMentionLowImportance: w,
            unread: N
        } = (0, l.cj)([u.default], () => ({
            mentionCount: j.map((e) => u.default.getMentionCount(e)).reduce((e, t) => e + t, 0),
            isMentionLowImportance: j.every((e) => u.default.getIsMentionLowImportance(e)),
            unread: j.some((e) => u.default.hasUnread(e))
        })),
        Z = i.useCallback(() => {
            s.Z.toggleGuildFolderExpand(_);
        }, [_]),
        T = i.useCallback(
            (e) => {
                (0, o.jW)(e, async () => {
                    let { default: e } = await n.e('52590').then(n.bind(n, 205784));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            b(m({}, t), {
                                folderId: _,
                                folderName: O,
                                folderColor: v,
                                unread: N || P > 0
                            })
                        );
                });
            },
            [_, O, v, N, P]
        );
    return (0, r.jsx)(
        p.Z,
        b(m({}, y), {
            folderNode: t,
            expanded: S,
            selected: null != x && j.includes(x),
            mentionCount: P,
            isMentionLowImportance: w,
            unread: N,
            mediaState: I,
            defaultFolderName: E,
            onExpandCollapse: Z,
            onContextMenu: T
        })
    );
});
