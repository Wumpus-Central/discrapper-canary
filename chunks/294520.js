n.d(t, {
    K6: () => E,
    eJ: () => b,
    iW: () => _,
    rx: () => y,
    sC: () => h,
    tt: () => m,
}),
    n(938796);
var r = n(665260),
    i = n(417597),
    a = n(930125),
    s = n(338717),
    o = n(282108),
    l = n(256265),
    c = n(253932),
    u = n(576705),
    d = n(863439),
    f = n(652215),
    p = n(985018);
let _ = (e, t) => {
        let { spoiler: n, flags: i = 0 } = e,
            l = (0, o.b)(
                {
                    type: a.D.Attachment,
                    media: e,
                },
                t,
            ),
            c = (0, o.$V)(
                {
                    type: a.D.Attachment,
                    media: e,
                },
                t,
            );
        return l.length > 0
            ? l[0]
            : c
              ? s.Oc.POTENTIAL_EXPLICIT_CONTENT
              : n || (0, r.Lt)(i, f.sbO.IS_SPOILER)
                ? s.Oc.SPOILER
                : null;
    },
    h = (e, t, n, r) => {
        let i = (0, o.b)(
                {
                    type: a.D.Embed,
                    media: e,
                },
                r,
            ),
            l =
                !t.author.bot &&
                (0, o.$V)(
                    {
                        type: a.D.Embed,
                        media: e,
                    },
                    r,
                );
        return i.length > 0 ? i[0] : l ? s.Oc.POTENTIAL_EXPLICIT_CONTENT : n ? s.Oc.SPOILER : null;
    },
    m = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            i = (0, o.b)(
                {
                    type: a.D.GenericMedia,
                    media: e,
                },
                t,
            ),
            l =
                !r &&
                (0, o.$V)(
                    {
                        type: a.D.GenericMedia,
                        media: e,
                    },
                    t,
                );
        return i.includes(s.Oc.EXPLICIT_CONTENT)
            ? s.Oc.EXPLICIT_CONTENT
            : i.includes(s.Oc.GORE_CONTENT)
              ? s.Oc.GORE_CONTENT
              : i.includes(s.Oc.SELF_HARM_CONTENT)
                ? s.Oc.SELF_HARM_CONTENT
                : l
                  ? s.Oc.POTENTIAL_EXPLICIT_CONTENT
                  : n
                    ? s.Oc.SPOILER
                    : null;
    };
function g(e) {
    switch (e.type) {
        case l.vV.EMBED:
            return {
                type: a.D.Embed,
                media: e,
            };
        case l.vV.ATTACHMENT:
            return {
                type: a.D.Attachment,
                media: e,
            };
        case l.vV.COMPONENT:
            return {
                type: a.D.GenericMedia,
                media: e.srcUnfurledMediaItem,
            };
        default:
            return null;
    }
}
function E(e, t, n) {
    if (null == e) return [!1, void 0];
    let r = g(e);
    if (null == r) return [!1, void 0];
    let i = (0, o.b)(r, n),
        a = (0, o.$V)(r, n);
    return i.length > 0
        ? [!0, i[0]]
        : a
          ? [!0, s.Oc.POTENTIAL_EXPLICIT_CONTENT]
          : e.spoiler
            ? [t, s.Oc.SPOILER]
            : [!1, void 0];
}
function b(e) {
    let { channel: t, media: n } = e,
        r = (0, i.bG)([u.A], () => null != t && u.A.can(f.xBc.MANAGE_MESSAGES, t)),
        s = c.gs.useSetting(),
        l = (0, o.O8)(a.v.GUILD);
    return E(n, !(0, d.A)(s, r), l);
}
let y = (e) => {
    switch (e) {
        case s.Oc.EXPLICIT_CONTENT:
        case s.Oc.GORE_CONTENT:
        case s.Oc.SELF_HARM_CONTENT:
            return p.intl.string(p.t.SEgHFh);
        case s.Oc.SPOILER:
            return p.intl.string(p.t["XpfDH+"]);
        default:
            return;
    }
};
