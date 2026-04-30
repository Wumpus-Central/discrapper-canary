n.d(t, { U: () => r });
class r extends Error {
    constructor(e, t = "warn") {
        super(e), (this.message = e), (this.logLevel = t);
    }
}
