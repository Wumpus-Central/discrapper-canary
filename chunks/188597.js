r.d(n, {
    $s: function () {
        return R;
    },
    A0: function () {
        return O;
    },
    Sg: function () {
        return C;
    },
    ow: function () {
        return b;
    },
    rQ: function () {
        return i;
    },
    t$: function () {
        return N;
    },
    tM: function () {
        return T;
    }
});
var i,
    a = r(47120);
var o = r(544891),
    s = r(570140),
    l = r(904245),
    u = r(911969),
    c = r(812206),
    d = r(375824),
    f = r(346479),
    p = r(314897),
    h = r(709054),
    _ = r(603721),
    m = r(282397),
    g = r(622449),
    E = r(96989),
    v = r(981631),
    y = r(388032);
function b(e) {
    return null == e || '' === e || Number.isNaN(e) ? Date.now() : h.default.extractTimestamp(e) + 900000;
}
function I(e) {
    return null == e || '' === e || Number.isNaN(e) ? Date.now() : h.default.extractTimestamp(e) + 3000;
}
let T = async (e) => {
    let { componentType: n, messageId: r, messageFlags: i, customId: a, componentId: s, applicationId: l, channelId: c, guildId: d, localState: g } = e,
        E = h.default.fromTimestamp(Date.now());
    if (!m.ZP.canQueueInteraction(r, E)) return;
    await f.Z.unarchiveThreadIfNecessary(c),
        (0, _.kz)(E, {
            messageId: r,
            data: {
                interactionType: u.B8.MESSAGE_COMPONENT,
                customId: a,
                componentId: s
            },
            onFailure: (e, n) => A(c, e, n)
        }),
        null != g && (0, _.B0)(r, E, g, s);
    let y = {
        type: u.B8.MESSAGE_COMPONENT,
        nonce: E,
        guild_id: d,
        channel_id: c,
        message_flags: i,
        message_id: r,
        application_id: l,
        session_id: p.default.getSessionId(),
        data: {
            component_type: n,
            custom_id: a,
            ...S(g)
        }
    };
    await o.tn.post(
        {
            url: v.ANM.INTERACTIONS,
            body: y,
            timeout: 3000,
            rejectWithError: !1
        },
        (e) => {
            C(E, e, l, c, d);
        }
    );
};
function S(e) {
    if (null == e) return null;
    if (e.type === u.re.STRING_SELECT || e.type === u.re.TEXT_INPUT) return e;
    let n = e.selectedOptions.map((e) => e.value);
    return {
        type: e.type,
        values: n
    };
}
let A = (e, n, r) => {
        null == r && null != n && l.Z.sendClydeError(e, n);
    },
    C = (e, n, r, i, a) => {
        if (!n.ok) {
            if (!n.hasErr) {
                var o;
                if (n.status >= 400 && n.status < 500 && n.body) {
                    if (n.body.code === v.evJ.INVALID_FORM_BODY && n.body.errors) {
                        let o = (0, E.e)(n.body.errors);
                        null != o &&
                            ('INTERACTION_APPLICATION_COMMAND_INVALID_VERSION' === o.code || 'INTERACTION_APPLICATION_COMMAND_INVALID' === o.code) &&
                            s.Z.dispatch({
                                type: 'APPLICATION_COMMAND_EXECUTE_BAD_VERSION',
                                applicationId: r,
                                channelId: i,
                                guildId: null != a ? a : null
                            }),
                            (0, _.yr)(e, void 0, null == o ? void 0 : o.message);
                        return;
                    }
                    (0, _.yr)(e, n.body.code, n.body.message, n.status);
                    return;
                }
                (0, _.yr)(e, null === (o = n.body) || void 0 === o ? void 0 : o.code);
                return;
            }
            (0, _.yr)(e);
        }
    };
!(function (e) {
    (e[(e.SENDING = 0)] = 'SENDING'), (e[(e.CREATED = 1)] = 'CREATED'), (e[(e.FAILED = 2)] = 'FAILED'), (e[(e.TIMED_OUT = 3)] = 'TIMED_OUT'), (e[(e.EPHEMERAL_SUCCESS = 4)] = 'EPHEMERAL_SUCCESS');
})(i || (i = {}));
let N = (e, n) => {
    let r = null == n ? void 0 : n.state,
        i = e.state === v.yb.SENT && b(e.id) < Date.now(),
        a = e.state === v.yb.SEND_FAILED && I(e.id) < Date.now(),
        o = (null == n ? void 0 : n.data.interactionType) === u.B8.APPLICATION_COMMAND,
        s = e.isCommandType();
    if ((o && r === g.F.QUEUED) || (s && e.state === v.yb.SENDING && null != n)) return 0;
    if ((o && r === g.F.CREATED) || (e.hasFlag(v.iLy.LOADING) && !i)) return 1;
    if (null != e.interaction && e.hasFlag(v.iLy.LOADING) && i) return 3;
    else if (null != e.interaction && !e.hasFlag(v.iLy.LOADING) && a) return 3;
    else if (s && e.state === v.yb.SEND_FAILED) return 2;
    else if (null != e.interaction && e.hasFlag(v.iLy.EPHEMERAL)) return 4;
};
function R(e) {
    let n = e.options;
    for (; (null == n ? void 0 : n.length) === 1 && (n[0].type === u.jw.SUB_COMMAND_GROUP || n[0].type === u.jw.SUB_COMMAND); ) n = n[0].options;
    for (let e of null != n ? n : []) if (e.type === u.jw.ATTACHMENT) return !1;
    return !0;
}
function O(e, n) {
    switch (e) {
        case d.Z.ReasonCodes.TIMEOUT:
            let r = c.Z.getApplication(n);
            if (null != r) return y.intl.formatToPlainString(y.t.u2D2Ul, { applicationName: r.name });
            return y.intl.string(y.t['vGU8+v']);
        case d.Z.ReasonCodes.ACTIVITY_LAUNCH_NOT_IN_EXPERIMENT:
            return y.intl.string(y.t.Gyzcra);
        case d.Z.ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_VERIFICATION_LEVEL:
        case d.Z.ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_PERMISSIONS:
            return y.intl.string(y.t.hHGrW1);
        case d.Z.ReasonCodes.ACTIVITY_LAUNCH_UNKNOWN_CHANNEL:
        case d.Z.ReasonCodes.ACTIVITY_LAUNCH_UNKNOWN_GUILD:
        case d.Z.ReasonCodes.ACTIVITY_LAUNCH_INVALID_CHANNEL_TYPE:
        case d.Z.ReasonCodes.ACTIVITY_LAUNCH_INVALID_CHANNEL_NO_AFK:
            return y.intl.string(y.t.j29zCg);
        case d.Z.ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_AGE_GATE:
            return y.intl.string(y.t['4WuFRE']);
        case d.Z.ReasonCodes.ACTIVITY_LAUNCH_INVALID_DEV_PREVIEW_GUILD_SIZE:
            return y.intl.string(y.t.RvkXdX);
        case d.Z.ReasonCodes.ACTIVITY_LAUNCH_INVALID_CONFIGURATION_PLATFORM_NOT_SUPPORTED:
        case d.Z.ReasonCodes.ACTIVITY_LAUNCH_INVALID_CONFIGURATION_PLATFORM_NOT_RELEASED:
            return y.intl.string(y.t.uGDCc3);
        case d.Z.ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_NO_ACCESS_TO_ACTIVITY:
            return y.intl.string(y.t.WjNAAA);
        case d.Z.ReasonCodes.ACTIVITY_LAUNCH_INVALID_LOCATION_TYPE:
            return y.intl.string(y.t.PtobXV);
    }
}
