n.d(t, {
    Ys: () => T,
    zK: () => y,
    yF: () => D,
    HW: () => L,
    z5: () => b,
    tB: () => U,
    x2: () => p,
    WQ: () => m,
    Xh: () => C,
    zD: () => N,
    AQ: () => g,
    c6: () => P,
    Dr: () => R,
    TJ: () => S,
    Ft: () => M,
    UV: () => v,
    WT: () => O,
});
var i = n(750459),
    r = n(517846),
    a = n(620632),
    s = n(73153),
    l = n(669700),
    o = n(46653),
    d = n(811091),
    c = n(920639),
    u = n(538638),
    _ = n(558076),
    E = n(872772),
    A = n(996512),
    h = n(360729),
    f = n(652215);
let I = { x: 0, y: 0 };
function p(e, t) {
    (s.h.dispatch({ type: "GUILD_ROOM_DISCONNECT", userId: o.default.getId(), roomId: t }),
        t !== e && (0, c.e6)({ guildId: e, channelId: t }));
}
function m(e, t) {
    s.h.dispatch({ type: "GUILD_ROOM_DISCONNECT", userId: e, roomId: t });
}
async function g(e, t, n) {
    let i = _.A.getRoom(t),
        r = _.A.getRoomUsers(t),
        l = _.A.getRoomObjects(t);
    try {
        let i = { type: "GUILD_ROOM_LOCAL_UPDATE", roomId: t };
        (n?.background != null && (i.background = n.background),
            n?.user_position != null && (i.position = n.user_position),
            n?.user_seat != null && (i.seat = n.user_seat),
            n?.user_status_id != null && (i.statusId = n.user_status_id),
            n?.user_status_text != null && (i.statusText = n.user_status_text),
            s.h.dispatch(i));
        let r = await a.Bo.post({ url: f.Rsh.GUILD_ROOM_UPDATE(e, t), body: n, rejectWithError: !0 }),
            l = (0, A.S)(r.body);
        if (e !== t) {
            if (
                (n?.user_position != null &&
                    (0, c.U8)({
                        channelId: t,
                        update: { updateType: "position", updateReason: "user_selected", position: n.user_position },
                    }),
                n?.user_status_id != null &&
                    (0, c.U8)({
                        channelId: t,
                        update: { updateType: "status_id", updateReason: "user_selected", statusId: n.user_status_id },
                    }),
                n?.user_status_text != null &&
                    (0, c.U8)({
                        channelId: t,
                        update: {
                            updateType: "status_text",
                            updateReason: "user_selected",
                            statusText: n.user_status_text,
                        },
                    }),
                n?.user_position != null)
            ) {
                let i = l.users.get(o.default.getId());
                null != i &&
                    (0, c.Yv)({
                        guildId: e,
                        channelId: t,
                        actualSeatPosition: i.position,
                        targetSeatPosition: n.user_position,
                        actualSeatId: i.seat,
                        targetSeatId: n.user_seat,
                    });
            }
            n?.background != null &&
                (0, c.JF)({ guildId: e, channelId: t, update: { updateType: "background", background: n.background } });
        }
    } catch (t) {
        throw (
            s.h.dispatch({
                type: "GUILD_ROOM_UPDATE_FAILURE",
                originalRoom: i,
                originalRoomUsers: r,
                originalRoomObjects: l,
                guildId: e,
            }),
            t
        );
    }
}
function T() {
    s.h.dispatch({ type: "GUILD_ROOM_LOCAL_POSITION_CLEARED" });
}
function S(e, t) {
    s.h.dispatch({ type: "GUILD_ROOM_LOCAL_POSITION_REQUESTED", position: e, seat: t });
}
function N(e) {
    s.h.dispatch({ type: "GUILD_ROOM_TOGGLE_LAYOUT", roomId: e });
}
async function C(e, t, n, i) {
    return await a.Bo.post({ url: f.Rsh.GUILD_ROOM_OBJECT_UPDATE(e, t, n), body: i, rejectWithError: !0 });
}
function O(e) {
    s.h.dispatch({ type: "GUILD_ROOM_PENDING_NOTE_START", roomId: e });
}
function R(e, t) {
    s.h.dispatch({ type: "GUILD_ROOM_PENDING_NOTE_PLACE", roomId: e, position: t });
}
function L(e) {
    s.h.dispatch({ type: "GUILD_ROOM_PENDING_NOTE_DELETE", roomId: e });
}
async function y(e, t, n, i) {
    let r = d.default.fromTimestamp(Date.now());
    (s.h.dispatch({ type: "GUILD_ROOM_NOTE_CREATE_START", roomId: t, localId: r, position: i }), L(t));
    try {
        (await (async function (e, t, n) {
            return await a.Bo.post({ url: f.Rsh.GUILD_ROOM_OBJECT_CREATE(e, t), body: n, rejectWithError: !0 });
        })(e, t, { object_type: E.N.NOTE, content: n, position: i }),
            t !== e && (0, c.Ql)({ interactionType: "note_created", guildId: e, channelId: t }));
    } catch (e) {
        throw (s.h.dispatch({ type: "GUILD_ROOM_NOTE_CREATE_FAILURE", roomId: t, localId: r }), e);
    }
}
async function D(e, t, n) {
    (await (async function (e, t, n, i) {
        return await a.Bo.del({ url: f.Rsh.GUILD_ROOM_OBJECT_DELETE(e, t, n), body: i, rejectWithError: !0 });
    })(e, t, n, { object_type: E.N.NOTE }),
        t !== e && (0, c.Ql)({ interactionType: "note_deleted", guildId: e, channelId: t }));
}
async function b(e, t) {
    try {
        let n = await a.Bo.get({ url: f.Rsh.GUILD_ROOM(e, t), rejectWithError: !0 }),
            i = (0, A.S)(n.body);
        s.h.dispatch({ type: "GUILD_ROOM_FETCH_SUCCESS", guildId: e, room: i });
    } catch (e) {
        (0, u.b)({ silent: !0 });
    }
}
function v(e, t) {
    let n = _.A.getVideoOverlayVisibility();
    (s.h.dispatch({ type: "GUILD_ROOM_SET_VIDEO_OVERLAY_VISIBILITY", value: e }),
        e !== n && (0, c.n0)({ interactionType: e ? "video_overlay_opened" : "video_overlay_closed", channelId: t }));
}
function P(e, t, n) {
    (0, h.W8)({ guildId: t, location: "maybeSetGuildRoomVideoOverlay" }, { autoTrackExposure: !1 }).enabled && v(e, n);
}
function M(e) {
    (s.h.dispatch({ type: "GUILD_ROOM_SET_REMEMBER_VIDEO_OVERLAY_VISIBILITY", rememberVideoOverlayVisibility: e }),
        (0, c.iY)({ rememberVideoOverlayVisibility: e }));
}
async function U(e, t, n, d) {
    try {
        await (async function (e, t, n, d) {
            try {
                let u = n ?? I,
                    _ = d ?? i.x.UNSET,
                    E = await a.Bo.post({
                        url: f.Rsh.GUILD_ROOM_CONNECT(e, t),
                        body: { position: u, seat: _ },
                        rejectWithError: !0,
                    }),
                    h = (0, A.S)(E.body);
                if (
                    (s.h.dispatch({
                        type: "GUILD_ROOM_CONNECT",
                        room: h,
                        guildId: e,
                        pendingPosition: u,
                        pendingSeat: _,
                    }),
                    t !== e)
                ) {
                    ((0, c.E2)({ guildId: e, channelId: t }), (0, l.hs)(r.w.GUILD_ROOM_JOINED));
                    let i = h.users.get(o.default.getId());
                    if (null != i) {
                        for (let e of [
                            { updateType: "position", updateReason: "default", position: i.position },
                            { updateType: "seat", updateReason: "default", seat: i.seat },
                            { updateType: "status_id", updateReason: "default", statusId: i.statusId },
                            { updateType: "status_text", updateReason: "default", statusText: i.statusText },
                        ])
                            (0, c.U8)({ channelId: t, update: e });
                        (0, c.Yv)({
                            guildId: e,
                            channelId: t,
                            actualSeatPosition: i.position,
                            targetSeatPosition: n,
                            actualSeatId: i.seat,
                            targetSeatId: d,
                        });
                    }
                }
            } catch (n) {
                throw (s.h.dispatch({ type: "GUILD_ROOM_CONNECT_FAILURE", guildId: e, roomId: t }), n);
            }
        })(e, t, n, d);
    } catch (e) {
        (0, u.b)();
    }
}
