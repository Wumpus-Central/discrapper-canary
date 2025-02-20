r.d(t, { I: () => n });
class n {
    static getSiteKey(e) {
        return null != e ? e : 'production' === window.GLOBAL_ENV.PROJECT_ENV ? '6LeYqFcqAAAAAD6iZesmNgVulsO4PkpBdr6NVG6M' : '6LdtfVMqAAAAAMurhtf2pDhK0oqD4eLqeQPh025y';
    }
    static loadRecaptchaScript(e, t) {
        if (null != document.getElementById('recaptcha-script-'.concat(this.getSiteKey(e)))) {
            null != t && t();
            return;
        }
        let r = document.createElement('script');
        (r.src = 'https://www.google.com/recaptcha/enterprise.js?render='.concat(this.getSiteKey(e))),
            (r.id = 'recaptcha-script-'.concat(this.getSiteKey(e))),
            (r.async = !0),
            (r.defer = !0),
            document.body.appendChild(r),
            null != t &&
                (r.onload = () => {
                    t();
                });
    }
}
