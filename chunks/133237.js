i.d(t, { t: () => n });
var r = i(976886),
    n = class e extends r.t {
        static async getInstance() {
            return e.instance
                ? e.instance
                : (e.initPromise ||
                      (e.initPromise = (async () => {
                          let t = new e();
                          return await t.initializeBase({}, "selfie"), (e.instance = t), t;
                      })()),
                  e.initPromise);
        }
        static resetInstance() {
            (e.instance = void 0), (e.initPromise = void 0);
        }
        constructor() {
            super(void 0);
        }
        async initialize(e) {
            if (this.initialized) return;
            let t = e.pipelines?.[0] ?? "selfie";
            await this.initializeBase(e, t);
        }
        async processFrame(e) {
            throw Error("WasmUtilProvider does not support frame processing. Use encryptImage() instead.");
        }
        encryptImage(e) {
            return this.ensureInitialized(), r.r.ens(e);
        }
        setSdkVersion(e) {
            this.ensureInitialized(), r.r.setSdkVersion(e);
        }
        setSdkPlatform(e) {
            this.ensureInitialized(), r.r.setSdkPlatform(e);
        }
        setDeviceInfo(e, t = !0) {
            this.ensureInitialized(), r.r.setDeviceInfo(e, t);
        }
        setBrowserInfo(e, t = !0) {
            this.ensureInitialized(), r.r.setBrowserInfo(e, t);
        }
        setCameraInfo(e, t = !0) {
            this.ensureInitialized(), r.r.setCameraInfo(e, t);
        }
        setMotionStatus(e) {
            this.ensureInitialized(), r.r.setMotionStatus(e);
        }
        setBackgroundMode(e) {
            this.ensureInitialized(), r.r.setBackgroundMode(e);
        }
        setZc(e) {
            this.ensureInitialized(), r.r.setZc(e);
        }
        setInspectorOpened(e) {
            this.ensureInitialized(), r.r.setInspectorOpened(e);
        }
        getMetadata() {
            return this.ensureInitialized(), r.r.getMetadata();
        }
        async analyzeFrame(e) {
            this.ensureInitialized(), await r.r.analyzeFrame(e);
        }
        getCheck() {
            return this.ensureInitialized(), r.r.getCheck();
        }
        getPipelineState() {
            return this.ensureInitialized(), r.r.getPipelineState();
        }
        estimatePerformance() {
            return this.ensureInitialized(), r.r.estimatePerformance();
        }
        isVirtualCamera(e) {
            return this.ensureInitialized(), r.r.isVirtualCamera(e);
        }
        async prc() {
            this.ensureInitialized(), await r.r.prc();
        }
        async poc(e) {
            this.ensureInitialized(), await r.r.poc(e);
        }
        ckvcks(e) {
            this.ensureInitialized(), r.r.ckvcks(e);
        }
        async getVersions() {
            return this.ensureInitialized(), r.r.getVersions();
        }
    };
