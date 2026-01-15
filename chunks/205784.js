r.d(t, { default: () => p });
var n = r(54381);
r(473749);
var l = r(442837),
    o = r(481060),
    i = r(239091),
    c = r(749210),
    s = r(664915),
    a = r(771845),
    d = r(181945),
    b = r(981631),
    u = r(388032);
function p(e) {
    let { folderId: t, folderName: p, folderColor: f, unread: y, onSelect: j } = e,
        O = (0, l.e7)([a.ZP], () => a.ZP.getGuildFolderById(t), [t]),
        g = (0, l.e7)([s.Z], () => s.Z.getExpandedFolders().size > 0);
    return (0, n.jsxs)(o.v2r, {
        navId: "guild-context",
        "aria-label": u.intl.string(u.t.HpQykc),
        onClose: i.Zy,
        onSelect: j,
        children: [
            (0, n.jsx)(o.kSQ, {
                children: (0, n.jsx)(o.sNh, {
                    id: "mark-folder-read",
                    label: u.intl.string(u.t.thzRJA),
                    action: function () {
                        if (null == O) return;
                        let { guildIds: e } = O;
                        (0, d.Z)(e, b.jXE.GUILD_LIST);
                    },
                    disabled: !y,
                }),
            }),
            (0, n.jsxs)(o.kSQ, {
                children: [
                    (0, n.jsx)(o.sNh, {
                        id: "folder-settings",
                        label: u.intl.string(u.t.Dx7im5),
                        action: () =>
                            (0, o.ZDy)(async () => {
                                let { default: e } = await r.e("77250").then(r.bind(r, 643087));
                                return (r) => {
                                    var l, o;
                                    return (0, n.jsx)(
                                        e,
                                        ((l = (function (e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var r = null != arguments[t] ? arguments[t] : {},
                                                    n = Object.keys(r);
                                                "function" == typeof Object.getOwnPropertySymbols &&
                                                    (n = n.concat(
                                                        Object.getOwnPropertySymbols(r).filter(function (e) {
                                                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                                        }),
                                                    )),
                                                    n.forEach(function (t) {
                                                        var n;
                                                        (n = r[t]),
                                                            t in e
                                                                ? Object.defineProperty(e, t, {
                                                                      value: n,
                                                                      enumerable: !0,
                                                                      configurable: !0,
                                                                      writable: !0,
                                                                  })
                                                                : (e[t] = n);
                                                    });
                                            }
                                            return e;
                                        })({}, r)),
                                        (o = o =
                                            {
                                                folderId: t,
                                                folderName: p,
                                                folderColor: f,
                                            }),
                                        Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(o))
                                            : (function (e, t) {
                                                  var r = Object.keys(e);
                                                  if (Object.getOwnPropertySymbols) {
                                                      var n = Object.getOwnPropertySymbols(e);
                                                      r.push.apply(r, n);
                                                  }
                                                  return r;
                                              })(Object(o)).forEach(function (e) {
                                                  Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(o, e));
                                              }),
                                        l),
                                    );
                                };
                            }),
                    }),
                    g &&
                        (0, n.jsx)(o.sNh, {
                            id: "folder-collapse",
                            label: u.intl.string(u.t.rCPsbo),
                            action: () => c.Z.collapseAllFolders(),
                        }),
                ],
            }),
        ],
    });
}
