n.d(t, {
    Z: () => C,
    r: () => y
});
var r = n(200651),
    i = n(192379),
    l = n(788347),
    o = n(481060),
    a = n(570140),
    s = n(668781),
    c = n(966390),
    u = n(680287),
    d = n(470623),
    p = n(957730),
    h = n(48854),
    f = n(703558),
    m = n(403182),
    g = n(928477),
    b = n(981631),
    _ = n(388032);
function C(e) {
    let { parentChannel: t, parentMessageId: n, threadSettings: r, privateThreadMode: l, location: o, onThreadCreated: a, useDefaultThreadName: s } = e,
        u = i.useCallback((e, t, n, r) => {
            c.Z.uploadFiles({
                channelId: e.id,
                uploads: t,
                draftType: f.d.FirstThreadMessage,
                options: { stickerIds: r },
                parsedMessage: p.ZP.parse(e, n)
            });
        }, []);
    return (0, g.JA)({
        parentChannel: t,
        parentMessageId: n,
        threadSettings: r,
        privateThreadMode: l,
        location: o,
        onThreadCreated: a,
        useDefaultThreadName: s,
        uploadHandler: u
    });
}
function y(e) {
    let { parentChannel: t } = e,
        { name: i, appliedTags: c } = (0, d.xH)((e) => {
            let { name: t, appliedTags: n } = e;
            return {
                name: t,
                appliedTags: n
            };
        }, l.X);
    return (0, g.Wj)({
        parentChannel: t,
        name: i,
        appliedTags: c,
        upload: function (e, i, l) {
            return new Promise((c, d) => {
                let p = new u.Z(e);
                p.on('error', (e, i, l) => {
                    if (i === b.evJ.EXPLICIT_CONTENT) {
                        let e = (0, h.r)();
                        null != l &&
                            null != l.attachments &&
                            l.attachments.length > 0 &&
                            (a.Z.dispatch({
                                type: 'MESSAGE_EXPLICIT_CONTENT_FP_CREATE',
                                messageId: e,
                                channelId: t.id,
                                attachments: l.attachments
                            }),
                            (0, o.ZDy)(async () => {
                                let { default: i } = await n.e('57539').then(n.bind(n, 924188));
                                return (n) => {
                                    var l, o;
                                    return (0, r.jsx)(
                                        i,
                                        ((l = (function (e) {
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
                                        })({}, n)),
                                        (o = o =
                                            {
                                                channelId: t.id,
                                                messageId: e
                                            }),
                                        Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(o))
                                            : (function (e, t) {
                                                  var n = Object.keys(e);
                                                  if (Object.getOwnPropertySymbols) {
                                                      var r = Object.getOwnPropertySymbols(e);
                                                      n.push.apply(n, r);
                                                  }
                                                  return n;
                                              })(Object(o)).forEach(function (e) {
                                                  Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(o, e));
                                              }),
                                        l)
                                    );
                                };
                            }));
                    } else if (i === b.evJ.ENTITY_TOO_LARGE) {
                        let e = (0, m.dg)(t.getGuildId());
                        s.Z.show({
                            title: _.NW.string(_.t['/tGlcn']),
                            body: _.NW.formatToPlainString(_.t.fxEKdX, { maxSize: (0, m.Ng)(e) })
                        });
                    } else
                        i === b.evJ.TOO_MANY_ATTACHMENTS &&
                            s.Z.show({
                                title: _.NW.string(_.t.wOr6hI),
                                body: _.NW.formatToPlainString(_.t['qqyp/f'], { limit: b.dN1 })
                            });
                    d({ body: l });
                }),
                    p.on('complete', (e, t) => {
                        c({ body: t });
                    }),
                    p.uploadFiles(l, i, { addFilesTo: 'message.attachments' });
            });
        }
    });
}
