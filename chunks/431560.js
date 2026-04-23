"use strict";
n.d(t, { Z: () => r });
class r {
    value = null;
    fetchState = "idle";
    fetchedAt = null;
    ttlMs;
    constructor(e = {}) {
        this.ttlMs = e.ttlMs ?? null;
    }
    setTtl(e) {
        this.ttlMs = e;
    }
    setLoading() {
        this.fetchState = "loading";
    }
    setValue(e) {
        (this.value = e), (this.fetchState = "success"), (this.fetchedAt = Date.now());
    }
    setError() {
        this.fetchState = "error";
    }
    clear() {
        (this.value = null), (this.fetchState = "idle"), (this.fetchedAt = null);
    }
    getValue() {
        return this.value;
    }
    getFetchState() {
        return this.fetchState;
    }
    getFetchedAt() {
        return this.fetchedAt;
    }
    forceExpire() {
        this.fetchedAt = null;
    }
    isExpired() {
        return null != this.ttlMs && (null == this.fetchedAt || Date.now() - this.fetchedAt >= this.ttlMs);
    }
    shouldFetch() {
        return "loading" !== this.fetchState && ("idle" === this.fetchState || this.isExpired());
    }
    isLoading() {
        return "loading" === this.fetchState;
    }
    isValid() {
        return "success" === this.fetchState && !this.isExpired();
    }
    isError() {
        return "error" === this.fetchState;
    }
    getStatus() {
        switch (this.fetchState) {
            case "idle":
                return "idle";
            case "loading":
                return "loading";
            case "error":
                return "error";
            case "success":
                return this.isExpired() ? "stale" : "valid";
        }
    }
    getValueWithStatus() {
        return { value: this.value, status: this.getStatus() };
    }
    serialize() {
        return null == this.value || null == this.fetchedAt ? null : { value: this.value, fetchedAt: this.fetchedAt };
    }
    restore(e) {
        null != e && ((this.value = e.value), (this.fetchedAt = e.fetchedAt), (this.fetchState = "success"));
    }
}
