r.d(t, { default: () => p });
var n = r(200651);
r(192379);
var l = r(442837),
    i = r(481060),
    o = r(239091),
    a = r(749210),
    d = r(664915),
    s = r(771845),
    c = r(181945),
    u = r(945983),
    b = r(981631),
    f = r(388032);
function p(e) {
    var t;
    let { folderId: p, folderName: j, folderColor: g, unread: m, onSelect: O } = e,
        h = (0, l.e7)([s.ZP], () => s.ZP.getGuildFolderById(p), [p]),
        y = (0, u.Z)(null != (t = null == h ? void 0 : h.guildIds) ? t : []),
        k = (0, l.e7)([d.Z], () => d.Z.getExpandedFolders().size > 0);
    return (0, n.jsxs)(i.v2r, {
        navId: 'guild-context',
        'aria-label': f.NW.string(f.t.HpQykZ),
        onClose: o.Zy,
        onSelect: O,
        children: [
            (0, n.jsx)(i.kSQ, {
                children: (0, n.jsx)(i.sNh, {
                    id: 'mark-folder-read',
                    label: f.NW.string(f.t.thzRJC),
                    action: function () {
                        if (null == h) return;
                        let { guildIds: e } = h;
                        (0, c.Z)(e, b.jXE.GUILD_LIST);
                    },
                    disabled: !m
                })
            }),
            null != y ? (0, n.jsx)(i.kSQ, { children: y }) : null,
            (0, n.jsxs)(i.kSQ, {
                children: [
                    (0, n.jsx)(i.sNh, {
                        id: 'folder-settings',
                        label: f.NW.string(f.t.Dx7im5),
                        action: () =>
                            (0, i.ZDy)(async () => {
                                let { default: e } = await r.e('66915').then(r.bind(r, 662708));
                                return (t) => {
                                    var r, l;
                                    return (0, n.jsx)(
                                        e,
                                        ((r = (function (e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var r = null != arguments[t] ? arguments[t] : {},
                                                    n = Object.keys(r);
                                                'function' == typeof Object.getOwnPropertySymbols &&
                                                    (n = n.concat(
                                                        Object.getOwnPropertySymbols(r).filter(function (e) {
                                                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                                        })
                                                    )),
                                                    n.forEach(function (t) {
                                                        var n;
                                                        (n = r[t]),
                                                            t in e
                                                                ? Object.defineProperty(e, t, {
                                                                      value: n,
                                                                      enumerable: !0,
                                                                      configurable: !0,
                                                                      writable: !0
                                                                  })
                                                                : (e[t] = n);
                                                    });
                                            }
                                            return e;
                                        })({}, t)),
                                        (l = l =
                                            {
                                                folderId: p,
                                                folderName: j,
                                                folderColor: g
                                            }),
                                        Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l))
                                            : (function (e, t) {
                                                  var r = Object.keys(e);
                                                  if (Object.getOwnPropertySymbols) {
                                                      var n = Object.getOwnPropertySymbols(e);
                                                      r.push.apply(r, n);
                                                  }
                                                  return r;
                                              })(Object(l)).forEach(function (e) {
                                                  Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e));
                                              }),
                                        r)
                                    );
                                };
                            })
                    }),
                    k &&
                        (0, n.jsx)(i.sNh, {
                            id: 'folder-collapse',
                            label: f.NW.string(f.t.rCPsbm),
                            action: () => a.Z.collapseAllFolders()
                        })
                ]
            })
        ]
    });
}
