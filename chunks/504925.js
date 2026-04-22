i.d(t, { A: () => n });
class n {
    constructor(e) {
        if (
            (function (e) {
                return (
                    "object" != typeof e ||
                    void 0 === e.length ||
                    void 0 === e.readUInt8 ||
                    void 0 === e.readUInt16LE ||
                    void 0 === e.readUInt16BE ||
                    void 0 === e.readUInt32LE ||
                    void 0 === e.readUInt32BE ||
                    void 0 === e.readInt32LE ||
                    void 0 === e.readInt32BE
                );
            })(e)
        )
            throw Error("DataView: Passed buffer type is unsupported.");
        (this.buffer = e), (this.byteLength = this.buffer.length);
    }
    getUint8(e) {
        return this.buffer.readUInt8(e);
    }
    getUint16(e, t) {
        return t ? this.buffer.readUInt16LE(e) : this.buffer.readUInt16BE(e);
    }
    getUint32(e, t) {
        return t ? this.buffer.readUInt32LE(e) : this.buffer.readUInt32BE(e);
    }
    getInt32(e, t) {
        return t ? this.buffer.readInt32LE(e) : this.buffer.readInt32BE(e);
    }
}
