n.d(t, {
    K: () => v,
}),
    n(321073),
    n(896048);
var r = n(627968);
n(64700);
var i = n(192308),
    a = n(397927),
    s = n(294454),
    o = n(118517),
    l = n(734057),
    c = n(31717),
    u = n(320501),
    d = n(954571),
    f = n(661191),
    p = n(518960),
    _ = n(372684),
    h = n(439818),
    m = n(399925),
    g = n(696016),
    E = n(652215);

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

function y(e) {
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
}

function O(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
async function v(e, t) {
    let { channelId: b, analyticsLocations: O, messageReference: v } = t,
        S = l.A.getChannel(b);
    if (null != S) {
        if (null != v) {
            let e = u.A.getMessage(v.channel_id, v.message_id);
            null != e &&
                (0, o.Yf)({
                    message: e,
                    channel: S,
                    shouldMention: !1,
                    showMentionToggle: !1,
                });
        }
        try {
            let t = [],
                n = [];
            for (let r of e) {
                var I;
                let e = await (0, m.VO)(r),
                    i = null != (I = r.name) ? I : (0, g.cM)(f.default.extractTimestamp(r.id)),
                    a = (0, h.A)(i);
                if (r.type === _.nQ.CLIP || r.type === _.nQ.VOICE_CLIP) {
                    let i = "".concat("" !== a ? a : "clip", ".mp4");
                    t.push(
                        new File([e], i, {
                            type: "video/mp4",
                        }),
                    ),
                        n.push({
                            clip: r,
                        });
                } else if (r.type === _.nQ.SCREENSHOT) {
                    let r = "".concat("" !== a ? a : "screenshot", ".jpeg");
                    t.push(
                        new File([e], r, {
                            type: "image/jpeg",
                        }),
                    ),
                        n.push({});
                }
                d.default.track(E.HAw.CLIP_SHARED, {
                    location_stack: O,
                    guild_id: S.guild_id,
                    channel_id: S.id,
                    channel_type: S.type,
                    application_id: r.applicationId,
                    clip_id: r.id,
                });
            }
            (0, p.R)(t, S, c.C.ChannelMessage, {
                filesMetadata: n,
                origin: "unknown:clip_share",
            }),
                i.closeAllModals();
        } catch (e) {
            throw (g.nx.error(e), e);
        }
    } else
        (0, a.mMO)(
            async () => {
                let { default: t } = await Promise.all([n.e("96758"), n.e("43622"), n.e("87102")]).then(
                    n.bind(n, 243258),
                );
                return (n) =>
                    (0, r.jsx)(
                        t,
                        A(y({}, n), {
                            clips: e,
                            analyticsLocations: O,
                        }),
                    );
            },
            {
                stackingBehavior: "stack",
                modalKey: s.aU,
            },
        );
}
