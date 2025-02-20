var r = n(384111),
    i = r.define('Time', function () {
        this.choice({
            utcTime: this.utctime(),
            generalTime: this.gentime()
        });
    }),
    o = r.define('AttributeTypeValue', function () {
        this.seq().obj(this.key('type').objid(), this.key('value').any());
    }),
    a = r.define('AlgorithmIdentifier', function () {
        this.seq().obj(this.key('algorithm').objid(), this.key('parameters').optional(), this.key('curve').objid().optional());
    }),
    s = r.define('SubjectPublicKeyInfo', function () {
        this.seq().obj(this.key('algorithm').use(a), this.key('subjectPublicKey').bitstr());
    }),
    l = r.define('RelativeDistinguishedName', function () {
        this.setof(o);
    }),
    c = r.define('RDNSequence', function () {
        this.seqof(l);
    }),
    u = r.define('Name', function () {
        this.choice({ rdnSequence: this.use(c) });
    }),
    d = r.define('Validity', function () {
        this.seq().obj(this.key('notBefore').use(i), this.key('notAfter').use(i));
    }),
    f = r.define('Extension', function () {
        this.seq().obj(this.key('extnID').objid(), this.key('critical').bool().def(!1), this.key('extnValue').octstr());
    }),
    p = r.define('TBSCertificate', function () {
        this.seq().obj(this.key('version').explicit(0).int().optional(), this.key('serialNumber').int(), this.key('signature').use(a), this.key('issuer').use(u), this.key('validity').use(d), this.key('subject').use(u), this.key('subjectPublicKeyInfo').use(s), this.key('issuerUniqueID').implicit(1).bitstr().optional(), this.key('subjectUniqueID').implicit(2).bitstr().optional(), this.key('extensions').explicit(3).seqof(f).optional());
    }),
    _ = r.define('X509Certificate', function () {
        this.seq().obj(this.key('tbsCertificate').use(p), this.key('signatureAlgorithm').use(a), this.key('signatureValue').bitstr());
    });
e.exports = _;
