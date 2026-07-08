i.d(t, { t: () => r });
var r = class e {
    static getInstance() {
        return e.instance || (e.instance = new e()), e.instance;
    }
    setTimeout(e, t) {
        return setTimeout(e, t);
    }
    setInterval(e, t) {
        return setInterval(e, t);
    }
    clearTimeout(e) {
        clearTimeout(e);
    }
    clearInterval(e) {
        clearInterval(e);
    }
};
