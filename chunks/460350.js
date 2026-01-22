n.d(t, { i: () => h }), n(896048), n(64700);
var r = n(73153),
    i = n(157559),
    a = n(884384),
    s = n(101392),
    o = n(287809),
    l = n(954571),
    c = n(565579),
    u = n(927578),
    d = n(652215),
    f = n(985018);
function p(e, t) {
    i.A.show({
        title: f.intl.string(f.t.l8rYLt),
        body: f.intl.formatToPlainString(f.t.FfjF15, {
            currentLength: e,
            maxLength: t,
        }),
        confirmText: f.intl.string(f.t.BddRzS),
    }),
        l.default.track(d.HAw.OPEN_MODAL, {
            type: "Message Too Long Alert",
            message_content_length: e,
        });
}
function _(e) {
    var t;
    let {
        openWarningPopout: n,
        type: o,
        content: l,
        stickers: u,
        uploads: _,
        channel: h,
        restrictMentions: m,
        respectCooldown: g,
        userCanUsePremiumMessageLength: E,
        resolve: b,
    } = e;
    if (
        0 === l.length &&
        !(null == (t = o.submit) ? void 0 : t.allowEmptyMessage) &&
        (null == u || 0 === u.length) &&
        (null == _ || 0 === _.length)
    )
        return void b({
            valid: !1,
            failureReason: d.X8x.EMPTY_MESSAGE,
        });
    let y = E ? d.CS1 : d.uvi,
        O = !E;
    if (l.length > y) {
        O && null != h
            ? r.h.dispatch({
                  type: "MESSAGE_LENGTH_UPSELL",
                  channel: h,
                  content: l,
              })
            : p(l.length, y),
            b({
                valid: !1,
                failureReason: d.X8x.MESSAGE_TOO_LONG,
            });
        return;
    }
    if (null != h) {
        if (null != h.getGuildId() && g && s.A.getSlowmodeCooldownGuess(h.id) > 0)
            return void b({
                valid: !1,
                failureReason: d.X8x.SLOWMODE_COOLDOWN,
            });
        if (null != n)
            for (let { check: e, analyticsType: t, animation: r } of c.m) {
                let i = e(l, h, m);
                if (!1 !== i)
                    return void n({
                        analyticsType: t,
                        channel: h,
                        onCancel: () =>
                            b({
                                valid: !1,
                                failureReason: d.X8x.SHOUTING_CANCELLED,
                            }),
                        onConfirm: () => b({ valid: !0 }),
                        popoutText: i,
                        animation: r,
                    });
            }
    }
    if (a.Ay.isFull()) {
        i.A.show({
            title: f.intl.string(f.t["7Q4eo2"]),
            body: f.intl.string(f.t.gi6XHp),
            confirmText: f.intl.string(f.t["Z4U1g/"]),
        }),
            b({
                valid: !1,
                failureReason: d.X8x.RATE_LIMITED,
            });
        return;
    }
    b({ valid: !0 });
}
function h(e) {
    let {
            openWarningPopout: t,
            type: n,
            content: r,
            stickers: i,
            uploads: a,
            channel: s,
            restrictMentions: l = !0,
            respectCooldown: c = !0,
        } = e,
        d = u.Ay.canUseIncreasedMessageLength(o.default.getCurrentUser());
    return new Promise((e) =>
        _({
            openWarningPopout: t,
            type: n,
            content: r,
            stickers: i,
            uploads: a,
            channel: s,
            restrictMentions: l,
            respectCooldown: c,
            userCanUsePremiumMessageLength: d,
            resolve: e,
        }),
    );
}
