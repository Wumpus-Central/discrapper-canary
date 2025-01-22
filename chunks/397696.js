r.d(n, {
    L: function () {
        return d;
    }
});
var i = r(47120);
var a = r(411104);
var o = r(230367),
    s = r(320215),
    l = r(240773),
    u = r(495852);
class c extends u.C {
    create(e) {
        let n = {
            clientVersion: 0,
            serverVersion: 0,
            dataVersion: 0
        };
        return (
            globalThis.Object.defineProperty(n, l.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, s.l)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, r, i) {
        let a = null != i ? i : this.create(),
            s = e.pos + n;
        for (; e.pos < s; ) {
            let [n, i] = e.tag();
            switch (n) {
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
                    let s = r.readUnknownField;
                    if ('throw' === s) throw new globalThis.Error('Unknown field '.concat(n, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? o.z.onRead : s)(this.typeName, a, n, i, l);
            }
        }
        return a;
    }
    internalBinaryWrite(e, n, r) {
        0 !== e.clientVersion && n.tag(1, o.TD.Varint).uint32(e.clientVersion), 0 !== e.serverVersion && n.tag(2, o.TD.Varint).uint32(e.serverVersion), 0 !== e.dataVersion && n.tag(3, o.TD.Varint).uint32(e.dataVersion);
        let i = r.writeUnknownFields;
        return !1 !== i && (!0 == i ? o.z.onWrite : i)(this.typeName, e, n), n;
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
let d = new c();
