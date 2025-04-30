n.d(t, { L: () => l }), n(980754), n(388685), n(415506);
var r = n(230367),
    i = n(320215),
    a = n(240773),
    o = n(495852);
class s extends o.C {
    create(e) {
        let t = {
            clientVersion: 0,
            serverVersion: 0,
            dataVersion: 0
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
                    a.clientVersion = e.uint32();
                    break;
                case 2:
                    a.serverVersion = e.uint32();
                    break;
                case 3:
                    a.dataVersion = e.uint32();
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
        0 !== e.clientVersion && t.tag(1, r.TD.Varint).uint32(e.clientVersion), 0 !== e.serverVersion && t.tag(2, r.TD.Varint).uint32(e.serverVersion), 0 !== e.dataVersion && t.tag(3, r.TD.Varint).uint32(e.dataVersion);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.discord_users.v1.Versions', [
            {
                no: 1,
                name: 'client_version',
                kind: 'scalar',
                T: 13
            },
            {
                no: 2,
                name: 'server_version',
                kind: 'scalar',
                T: 13
            },
            {
                no: 3,
                name: 'data_version',
                kind: 'scalar',
                T: 13
            }
        ]);
    }
}
let l = new s();
