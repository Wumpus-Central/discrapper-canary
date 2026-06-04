r.d(t, { v: () => n });
class n extends Error {
    extraSentryInformation;
    errorHandlingBehavior;
    constructor({ message: e, extraSentryInformation: t = null, errorHandlingBehavior: r = "rethrow" }) {
        super(e),
            (this.name = "FatalCheckoutError"),
            (this.extraSentryInformation = t),
            (this.errorHandlingBehavior = r);
    }
}
