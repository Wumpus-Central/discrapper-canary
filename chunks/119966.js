"use strict";
n.d(t, { G: () => r });
class r extends Error {
    errorCode;
    closeCode;
    code;
    message;
    name;
    constructor(e, t) {
        super(t),
            "closeCode" in e
                ? ((this.code = e.closeCode), (this.closeCode = e.closeCode))
                : ((this.code = e.errorCode), (this.errorCode = e.errorCode)),
            (this.message = t),
            (this.name = "RPCError");
    }
}
