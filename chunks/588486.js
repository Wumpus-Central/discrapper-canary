(n.d(t, {
    dR: () => d,
    k3: () => _
}),
    n(980754),
    n(388685),
    n(953529),
    n(539854),
    n(415506));
var r = n(230367),
    i = n(320215),
    a = n(240773),
    o = n(495852),
    s = n(552018),
    l = n(381499),
    c = n(835913),
    u = (function (e) {
        return ((e[(e.UNSPECIFIED = 0)] = 'UNSPECIFIED'), (e[(e.USER = 1)] = 'USER'), e);
    })({}),
    d = (function (e) {
        return ((e[(e.SURFACE_UNSPECIFIED = 0)] = 'SURFACE_UNSPECIFIED'), (e[(e.API = 1)] = 'API'), (e[(e.APP = 2)] = 'APP'), e);
    })({}),
    f = (function (e) {
        return ((e[(e.ENABLED = 0)] = 'ENABLED'), (e[(e.DISABLED = 1)] = 'DISABLED'), (e[(e.AA_MODE = 2)] = 'AA_MODE'), e);
    })({}),
    _ = (function (e) {
        return ((e[(e.UNSPECIFIED = 0)] = 'UNSPECIFIED'), (e[(e.CONTROL = 1)] = 'CONTROL'), (e[(e.TREATMENT = 2)] = 'TREATMENT'), (e[(e.OVERRIDE = 3)] = 'OVERRIDE'), e);
    })({}),
    p = (function (e) {
        return ((e[(e.UNSPECIFIED = 0)] = 'UNSPECIFIED'), (e[(e.ACTIVE = 1)] = 'ACTIVE'), (e[(e.UNUSED = 2)] = 'UNUSED'), e);
    })({}),
    h = (function (e) {
        return ((e[(e.UNSPECIFIED = 0)] = 'UNSPECIFIED'), (e[(e.DRAFT = 1)] = 'DRAFT'), (e[(e.TESTING = 2)] = 'TESTING'), (e[(e.TESTING_ENDED = 3)] = 'TESTING_ENDED'), (e[(e.ROLLOUT = 4)] = 'ROLLOUT'), (e[(e.ARCHIVED = 5)] = 'ARCHIVED'), e);
    })({});
class m extends o.C {
    create(e) {
        let t = {
            id: '0',
            name: '',
            creatorId: '0',
            version: 0,
            editorId: '0',
            title: '',
            description: '',
            revision: 0,
            hashKey: '',
            unitType: 0,
            variants: [],
            rules: [],
            status: 0,
            surfaces: [],
            owningTeamName: '',
            cachedNotificationChannelId: '0',
            exposureTracking: 0,
            enableEditRawJsonUi: !1
        };
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + t;
        for (; e.pos < o; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.id = e.fixed64().toString();
                    break;
                case 2:
                    a.name = e.string();
                    break;
                case 3:
                    a.createdAt = c.E.internalBinaryRead(e, e.uint32(), n, a.createdAt);
                    break;
                case 4:
                    a.creatorId = e.fixed64().toString();
                    break;
                case 5:
                    a.version = e.int32();
                    break;
                case 6:
                    a.editedAt = c.E.internalBinaryRead(e, e.uint32(), n, a.editedAt);
                    break;
                case 7:
                    a.editorId = e.fixed64().toString();
                    break;
                case 8:
                    a.title = e.string();
                    break;
                case 9:
                    a.description = e.string();
                    break;
                case 10:
                    a.hypothesis = l.Gm.internalBinaryRead(e, e.uint32(), n, a.hypothesis);
                    break;
                case 11:
                    a.techSpecLink = l.Gm.internalBinaryRead(e, e.uint32(), n, a.techSpecLink);
                    break;
                case 12:
                    a.revision = e.int32();
                    break;
                case 13:
                    a.hashKey = e.string();
                    break;
                case 14:
                    a.unitType = e.int32();
                    break;
                case 15:
                    a.variants.push(E.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 16:
                    a.rules.push(s.$9.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 18:
                    a.status = e.int32();
                    break;
                case 19:
                    if (i === r.TD.LengthDelimited) for (let t = e.int32() + e.pos; e.pos < t; ) a.surfaces.push(e.int32());
                    else a.surfaces.push(e.int32());
                    break;
                case 20:
                    a.owningTeamName = e.string();
                    break;
                case 21:
                    a.cachedNotificationChannelId = e.fixed64().toString();
                    break;
                case 22:
                    a.exposureTracking = e.int32();
                    break;
                case 23:
                    a.enableEditRawJsonUi = e.bool();
                    break;
                default:
                    let o = n.readUnknownField;
                    if ('throw' === o) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                    let u = e.skip(i);
                    !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, a, t, i, u);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        ('0' !== e.id && t.tag(1, r.TD.Bit64).fixed64(e.id), '' !== e.name && t.tag(2, r.TD.LengthDelimited).string(e.name), e.createdAt && c.E.internalBinaryWrite(e.createdAt, t.tag(3, r.TD.LengthDelimited).fork(), n).join(), '0' !== e.creatorId && t.tag(4, r.TD.Bit64).fixed64(e.creatorId), 0 !== e.version && t.tag(5, r.TD.Varint).int32(e.version), e.editedAt && c.E.internalBinaryWrite(e.editedAt, t.tag(6, r.TD.LengthDelimited).fork(), n).join(), '0' !== e.editorId && t.tag(7, r.TD.Bit64).fixed64(e.editorId), '' !== e.title && t.tag(8, r.TD.LengthDelimited).string(e.title), '' !== e.description && t.tag(9, r.TD.LengthDelimited).string(e.description), e.hypothesis && l.Gm.internalBinaryWrite(e.hypothesis, t.tag(10, r.TD.LengthDelimited).fork(), n).join(), e.techSpecLink && l.Gm.internalBinaryWrite(e.techSpecLink, t.tag(11, r.TD.LengthDelimited).fork(), n).join(), 0 !== e.revision && t.tag(12, r.TD.Varint).int32(e.revision), '' !== e.hashKey && t.tag(13, r.TD.LengthDelimited).string(e.hashKey), 0 !== e.unitType && t.tag(14, r.TD.Varint).int32(e.unitType));
        for (let i = 0; i < e.variants.length; i++) E.internalBinaryWrite(e.variants[i], t.tag(15, r.TD.LengthDelimited).fork(), n).join();
        for (let i = 0; i < e.rules.length; i++) s.$9.internalBinaryWrite(e.rules[i], t.tag(16, r.TD.LengthDelimited).fork(), n).join();
        if ((0 !== e.status && t.tag(18, r.TD.Varint).int32(e.status), e.surfaces.length)) {
            t.tag(19, r.TD.LengthDelimited).fork();
            for (let n = 0; n < e.surfaces.length; n++) t.int32(e.surfaces[n]);
            t.join();
        }
        ('' !== e.owningTeamName && t.tag(20, r.TD.LengthDelimited).string(e.owningTeamName), '0' !== e.cachedNotificationChannelId && t.tag(21, r.TD.Bit64).fixed64(e.cachedNotificationChannelId), 0 !== e.exposureTracking && t.tag(22, r.TD.Varint).int32(e.exposureTracking), !1 !== e.enableEditRawJsonUi && t.tag(23, r.TD.Varint).bool(e.enableEditRawJsonUi));
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t);
    }
    constructor() {
        super('discord_protos.discord_experimentation.v1.Experiment', [
            {
                no: 1,
                name: 'id',
                kind: 'scalar',
                T: 6
            },
            {
                no: 2,
                name: 'name',
                kind: 'scalar',
                T: 9
            },
            {
                no: 3,
                name: 'created_at',
                kind: 'message',
                T: () => c.E
            },
            {
                no: 4,
                name: 'creator_id',
                kind: 'scalar',
                T: 6
            },
            {
                no: 5,
                name: 'version',
                kind: 'scalar',
                T: 5
            },
            {
                no: 6,
                name: 'edited_at',
                kind: 'message',
                T: () => c.E
            },
            {
                no: 7,
                name: 'editor_id',
                kind: 'scalar',
                T: 6
            },
            {
                no: 8,
                name: 'title',
                kind: 'scalar',
                T: 9
            },
            {
                no: 9,
                name: 'description',
                kind: 'scalar',
                T: 9
            },
            {
                no: 10,
                name: 'hypothesis',
                kind: 'message',
                T: () => l.Gm
            },
            {
                no: 11,
                name: 'tech_spec_link',
                kind: 'message',
                T: () => l.Gm
            },
            {
                no: 12,
                name: 'revision',
                kind: 'scalar',
                T: 5
            },
            {
                no: 13,
                name: 'hash_key',
                kind: 'scalar',
                T: 9
            },
            {
                no: 14,
                name: 'unit_type',
                kind: 'enum',
                T: () => ['discord_protos.discord_experimentation.v1.Experiment.UnitType', u]
            },
            {
                no: 15,
                name: 'variants',
                kind: 'message',
                repeat: 1,
                T: () => E
            },
            {
                no: 16,
                name: 'rules',
                kind: 'message',
                repeat: 1,
                T: () => s.$9
            },
            {
                no: 18,
                name: 'status',
                kind: 'enum',
                T: () => ['discord_protos.discord_experimentation.v1.Status', h]
            },
            {
                no: 19,
                name: 'surfaces',
                kind: 'enum',
                repeat: 1,
                T: () => ['discord_protos.discord_experimentation.v1.Experiment.Surface', d]
            },
            {
                no: 20,
                name: 'owning_team_name',
                kind: 'scalar',
                T: 9
            },
            {
                no: 21,
                name: 'cached_notification_channel_id',
                kind: 'scalar',
                T: 6
            },
            {
                no: 22,
                name: 'exposure_tracking',
                kind: 'enum',
                T: () => ['discord_protos.discord_experimentation.v1.Experiment.ExposureTracking', f]
            },
            {
                no: 23,
                name: 'enable_edit_raw_json_ui',
                kind: 'scalar',
                T: 8
            }
        ]);
    }
}
new m();
class g extends o.C {
    create(e) {
        let t = {
            id: 0,
            label: '',
            allocations: [],
            type: 0
        };
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + t;
        for (; e.pos < o; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.id = e.int32();
                    break;
                case 2:
                    a.label = e.string();
                    break;
                case 4:
                    a.allocations.push(y.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 5:
                    a.type = e.int32();
                    break;
                default:
                    let o = n.readUnknownField;
                    if ('throw' === o) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                    let s = e.skip(i);
                    !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, a, t, i, s);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        (0 !== e.id && t.tag(1, r.TD.Varint).int32(e.id), '' !== e.label && t.tag(2, r.TD.LengthDelimited).string(e.label));
        for (let i = 0; i < e.allocations.length; i++) y.internalBinaryWrite(e.allocations[i], t.tag(4, r.TD.LengthDelimited).fork(), n).join();
        0 !== e.type && t.tag(5, r.TD.Varint).int32(e.type);
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t);
    }
    constructor() {
        super('discord_protos.discord_experimentation.v1.Variant', [
            {
                no: 1,
                name: 'id',
                kind: 'scalar',
                T: 5
            },
            {
                no: 2,
                name: 'label',
                kind: 'scalar',
                T: 9
            },
            {
                no: 4,
                name: 'allocations',
                kind: 'message',
                repeat: 1,
                T: () => y
            },
            {
                no: 5,
                name: 'type',
                kind: 'enum',
                T: () => ['discord_protos.discord_experimentation.v1.Variant.Type', _]
            }
        ]);
    }
}
let E = new g();
class b extends o.C {
    create(e) {
        let t = {
            start: 0,
            stop: 0,
            type: 0
        };
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + t;
        for (; e.pos < o; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.start = e.int32();
                    break;
                case 2:
                    a.stop = e.int32();
                    break;
                case 3:
                    a.type = e.int32();
                    break;
                default:
                    let o = n.readUnknownField;
                    if ('throw' === o) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                    let s = e.skip(i);
                    !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, a, t, i, s);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        (0 !== e.start && t.tag(1, r.TD.Varint).int32(e.start), 0 !== e.stop && t.tag(2, r.TD.Varint).int32(e.stop), 0 !== e.type && t.tag(3, r.TD.Varint).int32(e.type));
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t);
    }
    constructor() {
        super('discord_protos.discord_experimentation.v1.VariantAllocation', [
            {
                no: 1,
                name: 'start',
                kind: 'scalar',
                T: 5
            },
            {
                no: 2,
                name: 'stop',
                kind: 'scalar',
                T: 5
            },
            {
                no: 3,
                name: 'type',
                kind: 'enum',
                T: () => ['discord_protos.discord_experimentation.v1.VariantAllocation.Type', p]
            }
        ]);
    }
}
let y = new b();
