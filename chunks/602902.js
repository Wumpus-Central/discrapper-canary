n.d(t, {
    K: () => A,
}),
    n(321073),
    n(896048);
var r = n(627968);
n(64700);
var i = n(192308),
    l = n(397927),
    a = n(294454),
    s = n(118517),
    o = n(734057),
    c = n(31717),
    u = n(320501),
    d = n(954571),
    p = n(661191),
    m = n(518960),
    f = n(372684),
    g = n(439818),
    h = n(399925),
    _ = n(696016),
    b = n(652215);
async function A(e, t) {
    let { channelId: A, analyticsLocations: y, messageReference: v } = t,
        x = o.A.getChannel(A);
    if (null != x) {
        if (null != v) {
            let e = u.A.getMessage(v.channel_id, v.message_id);
            null != e &&
                (0, s.Yf)({
                    message: e,
                    channel: x,
                    shouldMention: !1,
                    showMentionToggle: !1,
                });
        }
        try {
            let t = [],
                n = [];
            for (let r of e) {
                var O;
                let e = await (0, h.VO)(r),
                    i = null != (O = r.name) ? O : (0, _.cM)(p.default.extractTimestamp(r.id)),
                    l = (0, g.A)(i);
                if (r.type === f.nQ.CLIP || r.type === f.nQ.VOICE_CLIP) {
                    let i = "".concat("" !== l ? l : "clip", ".mp4");
                    t.push(
                        new File([e], i, {
                            type: "video/mp4",
                        }),
                    ),
                        n.push({
                            clip: r,
                        });
                } else if (r.type === f.nQ.SCREENSHOT) {
                    let r = "".concat("" !== l ? l : "screenshot", ".jpeg");
                    t.push(
                        new File([e], r, {
                            type: "image/jpeg",
                        }),
                    ),
                        n.push({});
                }
                d.default.track(b.HAw.CLIP_SHARED, {
                    location_stack: y,
                    guild_id: x.guild_id,
                    channel_id: x.id,
                    channel_type: x.type,
                    application_id: r.applicationId,
                    clip_id: r.id,
                });
            }
            (0, m.R)(t, x, c.C.ChannelMessage, {
                filesMetadata: n,
                origin: "unknown:clip_share",
            }),
                i.closeAllModals();
        } catch (e) {
            throw (_.nx.error(e), e);
        }
    } else
        (0, l.mMO)(
            async () => {
                let { default: t } = await Promise.all([n.e("96758"), n.e("43622"), n.e("75838")]).then(
                    n.bind(n, 243258),
                );
                return (n) => {
                    var i, l;
                    return (0, r.jsx)(
                        t,
                        ((i = (function (e) {
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
                                        var r;
                                        (r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = r);
                                    });
                            }
                            return e;
                        })({}, n)),
                        (l = l =
                            {
                                clips: e,
                                analyticsLocations: y,
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(l)).forEach(function (e) {
                                  Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                              }),
                        i),
                    );
                };
            },
            {
                stackingBehavior: "stack",
                modalKey: a.aU,
            },
        );
}
