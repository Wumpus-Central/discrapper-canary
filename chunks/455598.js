n.d(t, { ej: () => p }), n(938796), n(321073);
var i = n(852015),
    r = n(144367),
    a = n(428420),
    s = n(535384),
    l = n(406935),
    o = n(335871);
class d extends s.G {
    constructor() {
        super("discord_protos.common.v1.MuteNotificationSettings", [
            { no: 1, name: "end_time", kind: "message", T: () => o.D },
            { no: 2, name: "selected_time_window", kind: "message", T: () => l.as },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, r.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let a = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    a.endTime = o.D.internalBinaryRead(e, e.uint32(), n, a.endTime);
                    break;
                case 2:
                    a.selectedTimeWindow = l.as.internalBinaryRead(e, e.uint32(), n, a.selectedTimeWindow);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let d = e.skip(r);
                    !1 !== s && (!0 === s ? i.f$.onRead : s)(this.typeName, a, t, r, d);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        e.endTime && o.D.internalBinaryWrite(e.endTime, t.tag(1, i.O0.LengthDelimited).fork(), n).join(),
            e.selectedTimeWindow &&
                l.as.internalBinaryWrite(e.selectedTimeWindow, t.tag(2, i.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let c = new d();
var u = n(813827);
class _ extends s.G {
    constructor() {
        super("discord_protos.discord_notifications.v1.UserNotificationSettings", [
            { no: 1, name: "user_id", kind: "scalar", T: 6 },
            { no: 2, name: "email_settings", kind: "message", T: () => A },
            { no: 6, name: "flags", kind: "message", T: () => l.ol },
            { no: 4, name: "guilds", kind: "map", K: 6, V: { kind: "message", T: () => S } },
            { no: 5, name: "version", kind: "scalar", T: 13 },
            { no: 7, name: "data", kind: "message", T: () => I },
        ]);
    }
    create(e) {
        let t = { userId: "0", guilds: {}, version: 0 };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, r.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let a = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    a.userId = e.fixed64().toString();
                    break;
                case 2:
                    a.emailSettings = A.internalBinaryRead(e, e.uint32(), n, a.emailSettings);
                    break;
                case 6:
                    a.flags = l.ol.internalBinaryRead(e, e.uint32(), n, a.flags);
                    break;
                case 4:
                    this.binaryReadMap4(a.guilds, e, n);
                    break;
                case 5:
                    a.version = e.uint32();
                    break;
                case 7:
                    a.data = I.internalBinaryRead(e, e.uint32(), n, a.data);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let o = e.skip(r);
                    !1 !== s && (!0 === s ? i.f$.onRead : s)(this.typeName, a, t, r, o);
            }
        }
        return a;
    }
    binaryReadMap4(e, t, n) {
        let i = t.uint32(),
            r = t.pos + i,
            a,
            s;
        for (; t.pos < r; ) {
            let [e, i] = t.tag();
            switch (e) {
                case 1:
                    a = t.fixed64().toString();
                    break;
                case 2:
                    s = S.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_notifications.v1.UserNotificationSettings.guilds",
                    );
            }
        }
        e[a ?? "0"] = s ?? S.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let r of ("0" !== e.userId && t.tag(1, i.O0.Bit64).fixed64(e.userId),
        e.emailSettings && A.internalBinaryWrite(e.emailSettings, t.tag(2, i.O0.LengthDelimited).fork(), n).join(),
        e.flags && l.ol.internalBinaryWrite(e.flags, t.tag(6, i.O0.LengthDelimited).fork(), n).join(),
        Object.keys(e.guilds)))
            t.tag(4, i.O0.LengthDelimited).fork().tag(1, i.O0.Bit64).fixed64(r),
                t.tag(2, i.O0.LengthDelimited).fork(),
                S.internalBinaryWrite(e.guilds[r], t, n),
                t.join().join();
        0 !== e.version && t.tag(5, i.O0.Varint).uint32(e.version),
            e.data && I.internalBinaryWrite(e.data, t.tag(7, i.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
new _();
class E extends s.G {
    constructor() {
        super("discord_protos.discord_notifications.v1.EmailNotificationSettings", [
            { no: 1, name: "categories", kind: "map", K: 9, V: { kind: "scalar", T: 8 } },
        ]);
    }
    create(e) {
        let t = { categories: {} };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, r.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let a = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            if (1 === t) this.binaryReadMap1(a.categories, e, n);
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                let l = e.skip(r);
                !1 !== s && (!0 === s ? i.f$.onRead : s)(this.typeName, a, t, r, l);
            }
        }
        return a;
    }
    binaryReadMap1(e, t, n) {
        let i = t.uint32(),
            r = t.pos + i,
            a,
            s;
        for (; t.pos < r; ) {
            let [e, n] = t.tag();
            switch (e) {
                case 1:
                    a = t.string();
                    break;
                case 2:
                    s = t.bool();
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_notifications.v1.EmailNotificationSettings.categories",
                    );
            }
        }
        e[a ?? ""] = s ?? !1;
    }
    internalBinaryWrite(e, t, n) {
        for (let n of Object.keys(e.categories))
            t.tag(1, i.O0.LengthDelimited)
                .fork()
                .tag(1, i.O0.LengthDelimited)
                .string(n)
                .tag(2, i.O0.Varint)
                .bool(e.categories[n])
                .join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let A = new E();
class h extends s.G {
    constructor() {
        super("discord_protos.discord_notifications.v1.UserNotificationSettingsData", [
            { no: 1, name: "muted_games", kind: "map", K: 6, V: { kind: "scalar", T: 8 } },
            { no: 2, name: "declarative_settings", kind: "message", T: () => p },
        ]);
    }
    create(e) {
        let t = { mutedGames: {} };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, r.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let a = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    this.binaryReadMap1(a.mutedGames, e, n);
                    break;
                case 2:
                    a.declarativeSettings = p.internalBinaryRead(e, e.uint32(), n, a.declarativeSettings);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let l = e.skip(r);
                    !1 !== s && (!0 === s ? i.f$.onRead : s)(this.typeName, a, t, r, l);
            }
        }
        return a;
    }
    binaryReadMap1(e, t, n) {
        let i = t.uint32(),
            r = t.pos + i,
            a,
            s;
        for (; t.pos < r; ) {
            let [e, n] = t.tag();
            switch (e) {
                case 1:
                    a = t.fixed64().toString();
                    break;
                case 2:
                    s = t.bool();
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_notifications.v1.UserNotificationSettingsData.muted_games",
                    );
            }
        }
        e[a ?? "0"] = s ?? !1;
    }
    internalBinaryWrite(e, t, n) {
        for (let n of Object.keys(e.mutedGames))
            t.tag(1, i.O0.LengthDelimited)
                .fork()
                .tag(1, i.O0.Bit64)
                .fixed64(n)
                .tag(2, i.O0.Varint)
                .bool(e.mutedGames[n])
                .join();
        e.declarativeSettings &&
            p.internalBinaryWrite(e.declarativeSettings, t.tag(2, i.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let I = new h();
class f extends s.G {
    constructor() {
        super("discord_protos.discord_notifications.v1.DeclarativeSettings", [
            { no: 1, name: "versions", kind: "message", T: () => u.u },
            { no: 2, name: "values", kind: "map", K: 13, V: { kind: "message", T: () => m } },
        ]);
    }
    create(e) {
        let t = { values: {} };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, r.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let a = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    a.versions = u.u.internalBinaryRead(e, e.uint32(), n, a.versions);
                    break;
                case 2:
                    this.binaryReadMap2(a.values, e, n);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let l = e.skip(r);
                    !1 !== s && (!0 === s ? i.f$.onRead : s)(this.typeName, a, t, r, l);
            }
        }
        return a;
    }
    binaryReadMap2(e, t, n) {
        let i = t.uint32(),
            r = t.pos + i,
            a,
            s;
        for (; t.pos < r; ) {
            let [e, i] = t.tag();
            switch (e) {
                case 1:
                    a = t.uint32();
                    break;
                case 2:
                    s = m.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_notifications.v1.DeclarativeSettings.values",
                    );
            }
        }
        e[a ?? 0] = s ?? m.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let r of (e.versions &&
            u.u.internalBinaryWrite(e.versions, t.tag(1, i.O0.LengthDelimited).fork(), n).join(),
        Object.keys(e.values)))
            t.tag(2, i.O0.LengthDelimited).fork().tag(1, i.O0.Varint).uint32(parseInt(r)),
                t.tag(2, i.O0.LengthDelimited).fork(),
                m.internalBinaryWrite(e.values[r], t, n),
                t.join().join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let p = new f();
class T extends s.G {
    constructor() {
        super("discord_protos.discord_notifications.v1.DeclarativeNotifSetting", [
            { no: 1, name: "toggle", kind: "scalar", T: 8 },
            { no: 2, name: "radio", kind: "scalar", T: 13 },
        ]);
    }
    create(e) {
        let t = { toggle: !1, radio: 0 };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, r.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let a = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    a.toggle = e.bool();
                    break;
                case 2:
                    a.radio = e.uint32();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let l = e.skip(r);
                    !1 !== s && (!0 === s ? i.f$.onRead : s)(this.typeName, a, t, r, l);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        !1 !== e.toggle && t.tag(1, i.O0.Varint).bool(e.toggle), 0 !== e.radio && t.tag(2, i.O0.Varint).uint32(e.radio);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let m = new T();
class g extends s.G {
    constructor() {
        super("discord_protos.discord_notifications.v1.GuildNotificationSettings", [
            { no: 1, name: "suppress_everyone", kind: "scalar", T: 8 },
            { no: 2, name: "message_notifications", kind: "scalar", T: 13 },
            { no: 3, name: "mobile_push", kind: "scalar", T: 8 },
            { no: 4, name: "mute", kind: "message", T: () => c },
            { no: 5, name: "channel_overrides", kind: "message", repeat: 1, T: () => C },
            { no: 6, name: "suppress_roles", kind: "scalar", T: 8 },
            { no: 7, name: "version", kind: "scalar", T: 13 },
            { no: 8, name: "hide_muted_channels", kind: "scalar", T: 8 },
            { no: 9, name: "mute_scheduled_events", kind: "scalar", T: 8 },
            { no: 10, name: "notify_highlights", kind: "scalar", T: 13 },
        ]);
    }
    create(e) {
        let t = {
            suppressEveryone: !1,
            messageNotifications: 0,
            mobilePush: !1,
            channelOverrides: [],
            suppressRoles: !1,
            version: 0,
            hideMutedChannels: !1,
            muteScheduledEvents: !1,
            notifyHighlights: 0,
        };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, r.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let a = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    a.suppressEveryone = e.bool();
                    break;
                case 2:
                    a.messageNotifications = e.uint32();
                    break;
                case 3:
                    a.mobilePush = e.bool();
                    break;
                case 4:
                    a.mute = c.internalBinaryRead(e, e.uint32(), n, a.mute);
                    break;
                case 5:
                    a.channelOverrides.push(C.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 6:
                    a.suppressRoles = e.bool();
                    break;
                case 7:
                    a.version = e.uint32();
                    break;
                case 8:
                    a.hideMutedChannels = e.bool();
                    break;
                case 9:
                    a.muteScheduledEvents = e.bool();
                    break;
                case 10:
                    a.notifyHighlights = e.uint32();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let l = e.skip(r);
                    !1 !== s && (!0 === s ? i.f$.onRead : s)(this.typeName, a, t, r, l);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        !1 !== e.suppressEveryone && t.tag(1, i.O0.Varint).bool(e.suppressEveryone),
            0 !== e.messageNotifications && t.tag(2, i.O0.Varint).uint32(e.messageNotifications),
            !1 !== e.mobilePush && t.tag(3, i.O0.Varint).bool(e.mobilePush),
            e.mute && c.internalBinaryWrite(e.mute, t.tag(4, i.O0.LengthDelimited).fork(), n).join();
        for (let r = 0; r < e.channelOverrides.length; r++)
            C.internalBinaryWrite(e.channelOverrides[r], t.tag(5, i.O0.LengthDelimited).fork(), n).join();
        !1 !== e.suppressRoles && t.tag(6, i.O0.Varint).bool(e.suppressRoles),
            0 !== e.version && t.tag(7, i.O0.Varint).uint32(e.version),
            !1 !== e.hideMutedChannels && t.tag(8, i.O0.Varint).bool(e.hideMutedChannels),
            !1 !== e.muteScheduledEvents && t.tag(9, i.O0.Varint).bool(e.muteScheduledEvents),
            0 !== e.notifyHighlights && t.tag(10, i.O0.Varint).uint32(e.notifyHighlights);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let S = new g();
class N extends s.G {
    constructor() {
        super("discord_protos.discord_notifications.v1.ChannelNotificationSettings", [
            { no: 1, name: "channel_id", kind: "scalar", T: 6 },
            { no: 7, name: "message_notifications", kind: "scalar", T: 13 },
            { no: 3, name: "mute", kind: "message", T: () => c },
            { no: 4, name: "collapsed", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let t = { channelId: "0", messageNotifications: 0, collapsed: !1 };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, r.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let a = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    a.channelId = e.fixed64().toString();
                    break;
                case 7:
                    a.messageNotifications = e.uint32();
                    break;
                case 3:
                    a.mute = c.internalBinaryRead(e, e.uint32(), n, a.mute);
                    break;
                case 4:
                    a.collapsed = e.bool();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let l = e.skip(r);
                    !1 !== s && (!0 === s ? i.f$.onRead : s)(this.typeName, a, t, r, l);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        "0" !== e.channelId && t.tag(1, i.O0.Bit64).fixed64(e.channelId),
            0 !== e.messageNotifications && t.tag(7, i.O0.Varint).uint32(e.messageNotifications),
            e.mute && c.internalBinaryWrite(e.mute, t.tag(3, i.O0.LengthDelimited).fork(), n).join(),
            !1 !== e.collapsed && t.tag(4, i.O0.Varint).bool(e.collapsed);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let C = new N();
