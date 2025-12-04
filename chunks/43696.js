r.d(t, { b: () => n });
class n extends Error {
    constructor(e, t = "warn") {
        super(e),
            (this.message = e),
            (this.name = new.target.prototype.constructor.name),
            Object.setPrototypeOf(this, new.target.prototype),
            (this.logLevel = t);
    }
}
