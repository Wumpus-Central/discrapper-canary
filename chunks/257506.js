"use strict";
n.d(t, { A: () => s }), n(321073);
var r = n(735438),
    i = n.n(r);
let a = [];
class s {
    bytes = {};
    static create() {
        let e = new s();
        return a.push(e), e.record;
    }
    record = (e) => {
        if (null != e) {
            for (let t in e.rtp.inbound)
                for (let n of e.rtp.inbound[t]) {
                    let e = `inbound-${t}-${n.type}`;
                    e in this.bytes || (this.bytes[e] = 0), (this.bytes[e] = n.bytesReceived);
                }
            for (let t of e.rtp.outbound) {
                let e = `outbound-${t.type}`;
                e in this.bytes || (this.bytes[e] = 0), (this.bytes[e] = t.bytesSent);
            }
        }
    };
    getTotalBytes() {
        return i().sum(Object.values(this.bytes));
    }
}
