n.d(t, {
    I: function () {
        return i;
    }
});
class i {
    static getSiteKey(e) {
        return null != e ? e : 'production' === window.GLOBAL_ENV.PROJECT_ENV ? '6LeYqFcqAAAAAD6iZesmNgVulsO4PkpBdr6NVG6M' : '6LdtfVMqAAAAAMurhtf2pDhK0oqD4eLqeQPh025y';
    }
    static loadRecaptchaScript(e, t) {
        if (null != document.getElementById('recaptcha-script-'.concat(this.getSiteKey(e)))) {
            null != t && t();
            return;
        }
        let n = document.createElement('script');
        (n.src = 'https://www.google.com/recaptcha/enterprise.js?render='.concat(this.getSiteKey(e))),
            (n.id = 'recaptcha-script-'.concat(this.getSiteKey(e))),
            (n.async = !0),
            (n.defer = !0),
            document.body.appendChild(n),
            null != t &&
                (n.onload = () => {
                    t();
                });
    }
}
