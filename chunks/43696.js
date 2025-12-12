n.d(t, { b: () => r });
class r extends Error {
    constructor(e, t = "warn") {
        super(e),
            (this.message = e),
            (this.name = new.target.prototype.constructor.name),
            Object.setPrototypeOf(this, new.target.prototype),
            (this.logLevel = t);
    }
}
